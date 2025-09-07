//api live ase kina kheyal rakhe 
//backend start kore 
//user login korle take rom assign kora hoy - convenience of messaging er jonno ( room join kore when in room  and viseversa )
//real time typing indicator - socket.io
// joto real time updating kaaj hoy ekhane ashe 

const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


const Chat = require("./models/chatModel"); 

//  books route
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // to accept JSON data

app.get("/", (req, res) => {
  res.send("API is running successfully!");  ////////////////imp/////////////
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

//  mount books API
app.use("/api/books", bookRoutes);

// Error handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// starting our own server
const server = app.listen(
  PORT,
  console.log(`Server started on PORT ${PORT}`.yellow.bold)
);

// --- SOCKET.IO ---
const io = require("socket.io")(server, {
  pingTimeout: 60000,  //idle user ke 1 min por disconnect kore dey 
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");

  socket.on("setup", (userData) => {
    if (!userData?._id) return;
    socket.join(userData._id);
    socket.userId = userData._id; // track for presence
    socket.emit("connected");
  });

  socket.on("leave chat", (room) => {
  if (!room) return;
  socket.leave(room);
  console.log("User Left Room:" + room);
});


  socket.on("join chat", (room) => {
    if (!room) return;
    socket.join(room);
    console.log("User Joined Room:" + room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  // look up chat.users by chatId on the server
  socket.on("new message", async (msg) => {
    try {
    
      const chatId =
        msg?.chat?._id?.toString?.() ??
        (msg?.chat ? msg.chat.toString() : null);

      if (!chatId) {
        console.log("new message missing chatId");
        return;
      }

      // fetch users for this chat to know who to notify
      const chat = await Chat.findById(chatId).populate("users", "name pic email");
      if (!chat?.users?.length) {
        console.log("chat.users missing or empty for chatId:", chatId);
        return;
      }

      const senderId =
        msg?.sender?._id?.toString?.() ??
        msg?.sender?.toString?.() ??
        "";

      chat.users.forEach((u) => {
        const uid = u?._id?.toString?.() ?? "";
        if (!uid || uid === senderId) return;
        socket.to(uid).emit("message received", msg);
      });
    } catch (err) {
      console.error("socket 'new message' error:", err);
    }
  });

  // ===== Presence: receive client heartbeats and broadcast to all clients =====
  socket.on("presence:ping", ({ userId, at }) => {
    const uid = userId || socket.userId;
    const ts = at || Date.now();
    if (!uid) return;
    io.emit("presence:update", { userId: uid, lastSeen: ts });
  });

  socket.on("disconnect", () => {
    if (socket.userId) {
      const ts = Date.now();
      io.emit("presence:update", { userId: socket.userId, lastSeen: ts });
    }
  });
});
