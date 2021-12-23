import React, { FC } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

interface LikeAndDislikeBarProps {
  dislikeValue: number | string,
  dislikeHandler?: () => Promise<void> | void
  likeValue: number | string,
  likeHandler?: () => Promise<void> | void
}

const LikeAndDislikeBar: FC<LikeAndDislikeBarProps> = ({
  dislikeValue, likeValue, dislikeHandler, likeHandler,
}) => (
  <div className="flex item-center space-x-2">
    <button
      className="text-primary-light hover:text-primary space-x-0.5 flex-center"
      onClick={likeHandler}
    >
      <AiOutlineLike size={20} />
      <span>
        {likeValue || 0}
      </span>
    </button>
    <button
      type="button"
      className="text-red-400 hover:text-red-600 space-x-0.5 flex-center"
      onClick={dislikeHandler}
    >
      <AiOutlineDislike size={20} />
      <span>
        {dislikeValue || 0}
      </span>
    </button>
  </div>
);

export default LikeAndDislikeBar;
