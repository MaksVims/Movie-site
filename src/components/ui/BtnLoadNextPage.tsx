import React, { FC } from 'react';

interface BtnLoadNextPageProps {
  fetching: () => Promise<void>
  className?: string
}

const BtnLoadNextPage: FC<BtnLoadNextPageProps> = ({ fetching, className }) => (
  <div className={`${className || ''}`}>
    <button
      type="button"
      onClick={fetching}
      className="btn-success btn-big"
    >
      Показать еще
    </button>
  </div>
);

export default BtnLoadNextPage;
