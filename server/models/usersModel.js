const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'enter email'],
  },
  password: {
    type: String,
    required: [true, 'enter password'],
    minlength: 5,
    // select: false,
    //預設會顯示密碼 改為false及會隱藏
  },
});

module.exports = mongoose.model('Data', userSchema);
