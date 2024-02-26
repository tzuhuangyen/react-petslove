require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const fs = require('fs');
// const ProductModel = require('./models/productModel'); // 假设您有一个名为 productModel 的产品模型

// 将环境变量中的 DATABASE_URL 存储在 mongoString 变量中
// const mongoString =
//   process.env.MONGODB__CONNECT_URL || 'mongodb://localhost:27017';
//backend port
// 使用 mongoose.connect() 连接到 MongoDB 数据库
const connectDB = require('./connectMongo');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(mongoString, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // useCreateIndex: true,
//     });
//     console.log('connectDB successfully');
//   } catch (error) {
//     console.log('Connect failed ' + error.message);
//   }
// };
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
app.use(express.json());
app.use(cors());

// 读取用户 JSON 文件内容
// fs.readFile('users.json', 'utf8', (err, userData) => {
//   if (err) {
//     console.error('Error reading users JSON file:', err);
//     return;
//   }

//   try {
//     // 将用户 JSON 字符串解析为 JavaScript 对象
//     const usersData = JSON.parse(userData);

//     // 将用户数据插入到 MongoDB 中的 users 集合中
//     UserModel.insertMany(usersData, (err, userDocs) => {
//       if (err) {
//         console.error('Error inserting users data into MongoDB:', err);
//       } else {
//         console.log('Users data inserted successfully:', userDocs);
//       }

//       // 断开与 MongoDB 的连接
//       mongoose.disconnect();
//     });
//   } catch (parseError) {
//     console.error('Error parsing users JSON file:', parseError);
//   }
// });

// 读取产品 JSON 文件内容
// fs.readFile('products.json', 'utf8', (err, productData) => {
//   if (err) {
//     console.error('Error reading products JSON file:', err);
//     return;
//   }

//   try {
//     // 将产品 JSON 字符串解析为 JavaScript 对象
//     const productsData = JSON.parse(productData);

//     // 将产品数据插入到 MongoDB 中的 products 集合中
//     ProductModel.insertMany(productsData, (err, productDocs) => {
//       if (err) {
//         console.error('Error inserting products data into MongoDB:', err);
//       } else {
//         console.log('Products data inserted successfully:', productDocs);
//       }

//       // 断开与 MongoDB 的连接
//       mongoose.disconnect();
//     });
//   } catch (parseError) {
//     console.error('Error parsing products JSON file:', parseError);
//   }
// });

const router = require('./routes/userRoutes');

app.use('/api', router);
//get / welcome page test
// app.get('/hello', (req, res) => {
//   res.status(200).json({ mssg: 'Hello World' });
//   console.log('Get request to /users');
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `Server Started at Server is running on http://localhost:${PORT}`
  );
});
