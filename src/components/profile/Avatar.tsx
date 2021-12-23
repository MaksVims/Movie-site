import React, { FC } from 'react';
import Image from 'next/image';
import NoAvatar from '/public/images/no_avatar.png'

interface AvatarProps {
  url?: string | null,
  classNames?: string,
  width: number,
  height: number
}

const Avatar: FC<AvatarProps> = ({
  url, width, height, classNames,
}) => (
  <div className={`mt-4 relative ${classNames}`}>
    <Image
      src={url || NoAvatar.src}
      width={width}
      height={height}
      className="rounded-full"
    />
  </div>
);

export default Avatar;
