import React from 'react';
import Register from '../components/register/Register';
import Prize from '../pages/prize/Prize';

const PrizeLayout = () => {
  return (
    <div>
      <Prize>
          <Register/>
      </Prize>
    </div>
  );
};

export default PrizeLayout;