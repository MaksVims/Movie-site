import React, {FC, SyntheticEvent, useRef} from 'react';
import {FaHeart} from "react-icons/fa";
import theme from "@/const/theme";
import {useHover} from "@/hooks";

interface ILike {
  className: string,
  size: number,
  onClick: () => Promise<void> | void
  active?: boolean
}

const Like: FC<ILike> = ({onClick, size, className, active = false}) => {
  const likeRef = useRef(null)
  const isHover = useHover(likeRef.current)

  const handlerClick = async (e: SyntheticEvent) => {
    e.preventDefault()
    await onClick()
  }

  return (
    <div ref={likeRef} onClick={handlerClick}>
      <FaHeart
        className={`cursor-pointer ${className}`}
        color={active || isHover ? theme.colors.pink['300'] : theme.colors.gray['400']}
        size={size}
      />
    </div>
  );
};

export default React.memo(Like);