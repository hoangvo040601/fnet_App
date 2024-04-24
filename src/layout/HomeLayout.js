import React from 'react';
import Register from '../components/register/Register';
import Home from '../pages/home/Home';

const HomeLayout = () => {
  return (
    <div>
      <Home>
          <Register/>
      </Home>
    </div>
  );
};

export default HomeLayout;