import {useEffect, useState} from "react";

export default function useHover(target: HTMLElement | null): boolean {
  const [isHover, setHover] = useState<boolean>(false)

  useEffect(() => {
    if (target) {

      const on = () => setHover(true)
      const off = () => setHover(false)

      target.addEventListener('pointerover', on)
      target.addEventListener('pointerleave', off)

      return () => {
        target.removeEventListener('pointerover', on)
        target.removeEventListener('pointerleave', off)
      }
    }
  }, [target])


  return isHover
}