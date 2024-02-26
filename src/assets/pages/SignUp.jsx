import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const data = {
        username: username,
        password: password,
      };
      // 设置请求头，指定 Content-Type 为 application/json
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      // 发送 POST 请求到 /users endpoint
      const response = await axios.post('/api/datas', data, config);
      // const baseURL = `http://localhost:5173/react-petslover`;

      console.log('User created:', response.data);
      alert('User registered/ sign up successfully!');
      setTimeout(() => {
        navigate('/react-petslove/users/login');
      }, 500);
    } catch (error) {
      if (
        error.response &&
        error.response.status === 400 &&
        error.response.data.message === 'Username already exists'
      ) {
        // 显示用户名已存在的提示信息给用户
        alert('This username has already been registered.');
      } else {
        // 其他错误情况，打印错误消息到控制台
        console.error('Error creating user:', error);
      }
    }
  };

  return (
    <div className='form-container'>
      <div className='signup-form'>
        <form
          id='form'
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <h2>Sign up</h2>
          <label className='label' htmlFor='username'>
            Username:
          </label>
          <input
            className='input'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='email'
            placeholder='please enter your mail'
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
            // pattern='[a-zA-Z0-9!@#$%^&*]{8,}'
            // title='Enter minimum of 8 characters containing at least one special character such as !@#$%^&*.'
            required
          />
        </form>
        <button
          type='submit'
          value='Sign Up'
          className='form--submit'
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <p className='para'>
          Already have an account?
          <Link to='/react-petslove/users/login'>Login</Link>
        </p>
        {/* <button>
          Delete your an account?
          <Link to="/delete">Delete</Link>
        </button> */}
      </div>
    </div>
  );
};

export default SignUp;
