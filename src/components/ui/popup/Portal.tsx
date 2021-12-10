import React, {FC, useEffect, useState} from 'react';
import {createPortal} from "react-dom";

const Portal: FC = ({children}) => {
  const [container] = useState<HTMLDivElement>(() => document.createElement('div'))

  useEffect(() => {
    document.body.append(container)
    return () => {
      container.remove()
    }
  }, [])

  return createPortal(children, container)
};

export default Portal;