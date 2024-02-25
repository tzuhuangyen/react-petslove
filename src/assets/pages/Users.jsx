import React from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Member from './Member';
function Users() {
  return (
    <div>
      <h2>Users</h2>
      <div className='container-lg'>
        <div className='row'>
          <div className='col-lg-6'>
            <Login />
          </div>
          <div className='col-lg-6'>
            <SignUp />
          </div>
        </div>
      </div>
      <Member />
    </div>
  );
}

export default Users;
