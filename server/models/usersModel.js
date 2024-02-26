const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// 假设 UserModel Schema 包含一个名为 password 的字段

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

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const match = await bcrypt.compare(candidatePassword, this.password);
    return match;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = mongoose.model('Data', userSchema);
