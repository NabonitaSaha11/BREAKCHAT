// define kore boi kemne stored ase mongo db te


const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, default: "", trim: true },
    genre: { type: String, default: "", trim: true },
    year: { type: Number, default: null },
    url: { type: String, required: true, trim: true }, // public PDF URL
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);


bookSchema.path("url").validate((v) => /^https?:\/\//i.test(v), "URL must be http(s)");

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
