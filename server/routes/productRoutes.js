const express = require('express');
const router = express.Router();
const ProductModel = require('./routes/productModel');

// GET 请求处理程序，用于获取所有产品数据
router.get('/api/products', async (req, res) => {
  try {
    // 从 MongoDB 中检索所有产品数据
    const products = await ProductModel.find();

    // 返回产品数据给前端
    res.json(products);
  } catch (error) {
    // 发生错误时返回错误信息给前端
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
