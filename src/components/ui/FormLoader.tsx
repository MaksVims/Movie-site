import React from 'react';

const FormLoader = () => {
  return (
    <div
      className="absolute bg-black top-0 left-0 full opacity-60 z-40 flex-center">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default FormLoader;