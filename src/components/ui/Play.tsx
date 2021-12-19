import React, {FC, useRef} from 'react';
import {AiFillPlayCircle} from "react-icons/ai";
import {useHover} from "@/hooks";
import theme from "@/const/theme";

interface IPlay {
  onClick?: () => void,
  className?: string
}

const Play: FC<IPlay> = ({className}) => {
  const playRef = useRef(null)
  const isHover = useHover(playRef.current)

  return (
    <div className={`absolute left-0 top-0 full bg-transparent ${className || ''}`}>
      <div ref={playRef}>
        <AiFillPlayCircle
          color={!isHover ? theme.colors.primary.DEFAULT : theme.colors.primary.light}
          size={70}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default React.memo(Play);