
//ei file ta connects our Node.js backend to a MongoDB database using Mongoose.

const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.join(__dirname, '..', '.env') }); 

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is missing. Check backend/.env');
    }

    const conn = await mongoose.connect(process.env.MONGO_URI); 
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
