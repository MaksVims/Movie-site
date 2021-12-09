import React, {FC} from 'react';

const MainSiteLoader: FC = () => {
  return (
    <div className="full min-screen flex-center">
      <div className="lds-dual-ring !h-40 !w-40 after:!h-40 after:!w-40"></div>
    </div>
  );
};

export default MainSiteLoader;