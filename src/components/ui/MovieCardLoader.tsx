import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader: FC = () => (
  <ContentLoader
    speed={2}
    width="auto"
    height="auto"
    viewBox="0 0 400 450"
    backgroundColor="#06202b"
    foregroundColor="#6b6b6b"
  >
    <rect x="0" y="0" rx="0" ry="0" width="250" height="400" className="rounded-md w-full" />
    <rect x="0" y="410" rx="0" ry="0" width="250" height="24" className="rounded-md w-full" />
  </ContentLoader>
)

export default MyLoader
