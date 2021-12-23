import { useCallback, useState } from 'react';

export default function useToggle(defaultValue?: boolean):
  [boolean, (value?: boolean) => void, () => void] {
  const [isToggle, setIsToggle] = useState<boolean>(defaultValue || false)

  const set = useCallback((value?: boolean) => {
    setIsToggle((prev) => value ?? !prev)
  }, [setIsToggle])

  const close = useCallback(() => set(false), [set])

  return [isToggle, set, close]
}
