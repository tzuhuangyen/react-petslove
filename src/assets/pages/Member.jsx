import React from 'react';

function Member() {
  return (
    <div>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-6'>
            <h3 className=' mb-4'>User Profile</h3>
            <p>username:</p>
            <p>password:</p>
          </div>
          <div className='col-6'>
            <h3 className=' mb-4'>update Password</h3>
            <form id='form' action='PATCH' className='display-flex flex-column'>
              <label className='label' htmlFor='password'>
                enter new password
              </label>
              <input
                className='input'
                id='password'
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                type='password'
                name='password'
                placeholder='Password'
                required
              />
              <button type='submit'>update</button>
            </form>
          </div>
        </div>

        <section className='text-center mt-5'>
          <p>delete account</p>
          <button>Delete</button>
        </section>
      </div>
    </div>
  );
}

export default Member;
