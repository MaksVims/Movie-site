import React from 'react';

const FormLoader = () => {
  return (
    <div
      className="absolute bg-black top-0 left-0 w-full h-full opacity-60 z-50 flex items-center justify-center">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default FormLoader;