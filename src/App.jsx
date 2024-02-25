import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/all.scss';
// import Home from './assets/pages/Home';
import Index from './assets/pages/Index';
import Header from './assets/pages/Header';
import Shop from './assets/pages/Shop';
import Blog from './assets/pages/Blog';
import Users from './assets/pages/Users';
import SignUp from './assets/pages/SignUp';
import Login from './assets/pages/Login';
import Member from './assets/pages/Member';
import Footer from './assets/pages/Footer';

function App() {
  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch('http://localhost:8080/api/datas');
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const usersData = await res.json();
        console.log(usersData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    getUsers();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path='/react-petslove' element={<Index />} />
        <Route path='/react-petslove/shop' element={<Shop />} />
        <Route path='/react-petslove/users' element={<Users />} />
        <Route path='/react-petslove/users/signup' element={<SignUp />} />
        <Route path='/react-petslove/users/login' element={<Login />} />
        {/* <Route path="/favorite" element={<Favorite />} /> */}
        <Route path='/react-petslove/users/member' element={<Member />} />
        <Route path='/react-petslove/blog' element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
