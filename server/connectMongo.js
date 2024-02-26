const mongoose = require('mongoose');
require('dotenv').config();

// 将环境变量中的 DATABASE_URL 存储在 mongoString 变量中
const mongoString =
  process.env.MONGODB__CONNECT_URL || 'mongodb://localhost:27017';

// 使用 mongoose.connect() 连接到 MongoDB 数据库
const connectDB = async () => {
  try {
    await mongoose.connect(mongoString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log('connectDB successfully');
  } catch (error) {
    console.log('Connect failed ' + error.message);
  }
};

module.exports = connectDB;
