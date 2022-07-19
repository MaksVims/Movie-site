import React, { FC } from 'react'
import cn from 'classnames'

interface LoaderProps {
  classes?: string
}

const Loader: FC<LoaderProps> = ({ classes }) => {
  const loaderClasses = cn(`absolute top-0 left-0 full z-40 flex-center ${classes}`)

  return (
    <div className={loaderClasses}>
      <div className="lds-dual-ring" />
    </div>
  )
}

export default Loader;
