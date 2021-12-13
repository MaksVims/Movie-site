import React, {FC} from 'react';

interface BoxDisplayCenterProps {
  title: string
}

const BoxDisplayCenter:FC<BoxDisplayCenterProps> = ({title}) => {
  return (
    <div className="full flex-center">
      <span className="font-medium">{title}</span>
    </div>
  );
};

export default BoxDisplayCenter;