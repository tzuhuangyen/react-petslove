import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Member() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [userId, setUserId] = useState(null); // 在组件中定义状态来存储用户ID
  const navigate = useNavigate();

  //用于从令牌中解析出用户ID：
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken && decodedToken.userId) {
        setUserId(decodedToken.userId); // 设置用户ID状态
      }
    }
    console.log('User ID:', userId); // 记录用户 ID 值
  }, []);

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (!newPassword) {
      alert('Please enter a new password.');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found in local storage');
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      // 定义数据对象，包含密码
      const data = {
        newPassword: newPassword, // 请替换为您的密码变量或值
      };

      // 发送重新登录请求以获取新令牌
      const response = await axios.patch(`/api/datas/update`, data, config);
      console.log(response.data);

      alert('Your password has been updated.');
      setTimeout(() => {
        navigate('/react-petslove/users/login');
      }, 500);
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found in local storage');
        return;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      // 发送带有身份验证头部的 DELETE 请求
      const response = await axios.delete('/api/datas/delete', config);
      console.log(response.data);
      alert('Your account has been deleted.');
    } catch (error) {
      console.error('Error deleting account:', error.response);
    }
  };
  return (
    <div>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6 col-12'>
            <h3 className=' mb-2'>User Profile</h3>
            <p>username:{username}</p>
            <p>password:{password}</p>
          </div>
          <div className='col-md-6 col-12'>
            <h3 className=' mt-4 mb-2'>update Password</h3>
            <form
              id='form'
              onSubmit={handlePasswordUpdate}
              className='display-flex flex-column'
            >
              <label className='label' htmlFor='password'>
                Enter new password
              </label>
              <input
                className='input'
                type='password'
                name='password'
                value={newPassword} // 将密码与 state 中的 password 变量绑定
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder='enter new Password'
                required
              />
              <button
                className='mt-2
              '
                type='submit'
              >
                Update
              </button>
            </form>
          </div>
        </div>

        <section className='text-center mt-5 container mb-5'>
          <h3 className='mb-3'>Delete account</h3>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className='mb-2'
            />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='mt-2' onClick={handleDeleteAccount}>
            Delete My Account
          </button>
        </section>
      </div>
    </div>
  );
}

export default Member;
