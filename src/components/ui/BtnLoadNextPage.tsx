import React, {FC} from 'react';

interface BtnLoadNextPageProps {
  fetching: () => Promise<void>
  className?: string
}

const BtnLoadNextPage: FC<BtnLoadNextPageProps> = ({fetching, className}) => {
  return (
    <div className={`${className || ''}`}>
      <button onClick={fetching} className="btn-success rounded-md px-4 py-2 text-xl">
        Показать еще
      </button>
    </div>
  );
};

export default BtnLoadNextPage;