import React, {FC, useRef} from 'react';
import {AiFillPlayCircle} from "react-icons/ai";
import useHover from "@/hooks/useHover";
// @ts-ignore
import resolveConfig from 'tailwindcss/resolveConfig'
// @ts-ignore
import tailwindConfig from '/tailwind.config'

const colors = resolveConfig(tailwindConfig).theme.colors

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
          color={isHover ? colors.primary.DEFAULT : colors.primary.light}
          size={70}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default React.memo(Play);