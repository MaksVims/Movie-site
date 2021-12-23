import React, { FC } from 'react';

interface BoxDisplayCenterProps {
  title: string,
  className?: string
}

const BoxDisplayCenter: FC<BoxDisplayCenterProps> = ({ title, className }) => (
  <div className={`flex-center absolute inset-0 ${className || ''}`}>
    <span className="font-medium">{title}</span>
  </div>
);

export default BoxDisplayCenter;
