const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'enter product name'],
  },
  price: {
    type: Number,
    required: [true, 'enter price'],
    // select: false,
    //預設會顯示密碼 改為false及會隱藏
  },
  type: {
    type: String,
    required: [true, 'enter product type,beef...'],
  },
  order: {
    type: String,
    required: [true, 'enter product order,in stock...'],
  },
});

module.exports = mongoose.model('Product', productSchema);
