import React, {FC} from 'react';
import Image from "next/image";
import NoAvatar from '/public/images/no_avatar.png'

interface AvatarProps {
  url?: string | null,
  classNames?: string,
  width: number,
  height: number
}

const Avatar: FC<AvatarProps> = ({url, width, height, classNames}) => {
  return (
    <div className={`mt-4 relative ${classNames}`}>
      <Image
        src={url ? url : NoAvatar.src}
        width={width}
        height={height}
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;