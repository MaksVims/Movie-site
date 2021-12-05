import React, {FC} from 'react';

interface IBubble {
  className: string,
  handleClick?: () => {}
}

const Bubble: FC<IBubble> = ({children, className = ''}) => {

  return (
    <span
      className={`absolute text-sm bg-secondary block rounded-sm py-1 px-3 text-white ${className}`}
      onPointerDown={e => e.preventDefault()}
    >
      {children}
    </span>
  );
};

export default Bubble;