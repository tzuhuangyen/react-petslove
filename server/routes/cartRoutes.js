const express = require('express');
const router = express.Router();
// 購物車功能
router.get('/cart', async (req, res) => {
  // 取得購物車內容的邏輯
  try {
    // 使用 Axios 發送 GET 請求至 JSON Server 的購物車 API
    const response = await axios.get('http://localhost:3000/carts');

    // 將 JSON Server 回傳的資料傳送回前端
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching cart data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/cart', async (req, res) => {
  // 新增商品到購物車的邏輯
  try {
    const { name, quantity, price, total } = req.body;

    // 在這裡使用 Axios 來新增到 JSON Server 的資料庫
    const response = await axios.post(`http://localhost:3000/carts`, {
      productName: name,
      quantity: quantity,
      price: price,
      total: total,
    });

    // 取得新增的資料庫項目的 ID
    const newItemId = response.data.id;

    // 回傳新增成功的訊息，以及新項目的 ID
    res.json({
      success: true,
      message: 'New item added to cart successfully',
      newItemId: newItemId,
    });
  } catch (error) {
    console.error('Error adding new item to cart:', error);
    res.status(500).json({
      success: false,
      message: 'Error adding new item to cart',
    });
  }
});

//handle update qty.
router.patch('/carts/:id', async (req, res) => {
  try {
    const itemIdToUpdate = req.params.id;
    const { newqty } = req.body;

    await axios.patch(`http://localhost:3000/carts/${itemIdToUpdate}`, {
      quantity: newqty,
    });

    res.json({ success: true, message: 'Item quantity updated' });
  } catch (error) {
    console.error('Error updating item quantity in cart:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating item quantity',
    });
  }
});
// 處理從購物車刪除的路由
router.delete('/cart/:id', async (req, res) => {
  try {
    const itemIdToDelete = req.params.id;

    await axios.delete(`http://localhost:3000/carts/${itemIdToDelete}`);
    // 回傳刪除成功的訊息
    res.json({
      success: true,
      message: 'Item deleted from cart successfully',
    });
  } catch (error) {
    console.log('Error deleting item from cart:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting item from cart',
    });
  }
});
