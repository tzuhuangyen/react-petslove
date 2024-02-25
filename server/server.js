require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// 将环境变量中的 DATABASE_URL 存储在 mongoString 变量中
const mongoString = process.env.DATABASE_URL || 'mongodb://localhost:27017';
//backend port
const post = process.env.PORT || 8080;
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
connectDB();
// 获取默认连接
const database = mongoose.connection;
// 监听数据库连接成功事件
database.on('connected', () => {
  console.log('databaseOn connected 成功 successfully');
});
// 监听数据库连接失败事件
database.on('error', (error) => {
  console.log('MongoDB connection error:', error);
});

database.once('connected', () => {
  console.log('DatabaseOnce 连接成功 Connected');
});

const app = express();
app.use(cors());
app.use(express.json());

const router = require('./routes/userRoutes');

app.use('/api', router);
//get / welcome page
app.get('/hello', (req, res) => {
  res.status(200).json({ mssg: 'Hello World' });
  console.log('Get request to /users');
});
app.listen(post, () => {
  console.log(
    `Server Started at Server is running on http://localhost:${post}`
  );
});
