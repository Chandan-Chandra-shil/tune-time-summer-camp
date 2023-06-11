import React, { useEffect, useState } from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Loader from '../components/Loader';

const Main = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])
  
  return (
    <div>
      {
        loading ? <Loader></Loader> : <> <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer></>
     }
      
    </div>
  );
};

export default Main;