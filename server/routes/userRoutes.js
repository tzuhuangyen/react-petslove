const express = require('express');
const UserModel = require('../models/usersModel');
const router = express.Router();

// const bcrypt = require('bcrypt');
// const validator = require('validator');
// const jwt = require('jsonwebtoken');
//加密用戶密碼並測試是否成功
// const userPassword = 'thisisexample';
// const passwordHash = bcrypt.hashSync(userPassword, process.env.SALT);
// console.log(passwordHash);
//比較用戶輸入的密碼和加密後的密碼是否一樣 如果一樣就回傳 true
// const hashPassword = bcrypt.hash(userPassword, 10).then((res) => {
//   bcrypt.compare(userPassword, res, function (err, ans) {
//     console.log(ans);
//   });
// });

// app.use(express.json());

//find/get all users
router.get('/datas', async (req, res) => {
  try {
    const data = await UserModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//post by ID
// router.get('/getOne/:id', async (req, res) => {
//   try {
//     const data = await UserModel.findById(req.params.id);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
//post method test
// router.post('/datas', async (req, res) => {
//   res.status(201).json({ message: 'Post request to /api/datas' });
// });

// Post 註冊功能
router.post('/datas', async (req, res) => {
  // 處理註冊的邏輯
  const data = new UserModel({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    // 检查是否已存在相同用户名的用户
    const existingUser = await UserModel.findOne({
      username: req.body.username,
    });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Post 登入功能
// router.post('/datas/login', (req, res) => {
//   // 從 POST 請求的 body 中取得使用者提供的資訊
//   const payload = {
//     username: req.body.username,
//     password: req.body.password,
//   };
//   const token = jwt.sign(payload, process.env.SECRET_KEY);
//   res.end(token);

//   // 在 users 陣列中查找是否存在符合提供的使用者名稱和密碼的帳戶
//   const user = users.find(
//     (user) => user.username === username && user.password === password
//   );

//   if (user) {
//     // 登入成功，可以回傳一些相應的資訊
//     res
//       .status(200)
//       .json({ message: 'User logged in successfully', id: user.id });
//   } else {
//     // 登入失敗，回傳相應的錯誤訊息
//     res.status(401).json({ message: 'Invalid username or password' });
//   }
// });

//update by id
//

//patch / update
router.patch('/datas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const options = { new: true };

    const result = await UserModel.findByIdAndUpdate(id, updateData, options);
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  // res.status(201).json({ message: 'update request to /api/datas' });
});

//Delete user by id
router.delete('/datas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await UserModel.findByIdAndDelete(id);
    res.send(`Document with ${data.username} has been deleted`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// router.get("*", (req, res) => {
//   res.status(404);
//   console.log(res.statusCode);
//   res.sendFile(__dirname + "/error.html");
// });

module.exports = router;
