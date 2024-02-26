import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 假設你使用了 React Router
import axios from 'axios';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      // const baseURL = `http://localhost:5173/users`;
      const data = {
        username: username,
        password: password,
      };

      // 发送 POST 请求到 /login endpoint
      const response = await axios.post(`/api/datas/login`, data);
      const token = response.data.token;

      alert('User logged in successfully!');
      // 登录成功，存储令牌并重定向到用户资料页面
      localStorage.setItem('token', token);
      console.log('User logged in:', response.data);
      setTimeout(() => {
        navigate('/react-petslove/users/member');
      }, 500);
    } catch (error) {
      console.error('Error logging in:', error);
      // 在這裡處理登入失敗的情況，例如顯示錯誤訊息
    }
  };

  return (
    <div className='form-container'>
      <div className='login-form'>
        <form id='form' onSubmit={(e) => e.preventDefault()}>
          <h2>Log in</h2>
          <label className='label' htmlFor='username'>
            Username:
          </label>
          <input
            className='input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='email'
            placeholder='Please enter your email'
            required
          />

          <label className='label' htmlFor='password'>
            Password:
          </label>
          <input
            className='input'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            placeholder='Password'
            required
          />

          <button type='submit' className='form--submit' onClick={handleLogIn}>
            Log In
          </button>
        </form>

        <p className='para'>
          Don't have an account?{' '}
          <Link to='/react-petslove/users/signup'>Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
