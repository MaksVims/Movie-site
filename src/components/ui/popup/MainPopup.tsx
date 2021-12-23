import React, { FC } from 'react';
import { OverlayPopup, HeaderPopup } from '@/components/ui/popup';

interface MainPopupProps {
  onClose: () => void
  isOpened: boolean
  title: string
}

const MainPopup: FC<MainPopupProps> = ({
  onClose, isOpened, title, children,
}) => (
  <OverlayPopup onClose={onClose} isOpened={isOpened}>
    <div className="min-w-[280px] xs:min-w-[400px] max-w-2xl bg-white rounded-xl p-6 shadow-lg">
      <HeaderPopup onClose={onClose} title={title} />
      {children}
    </div>
  </OverlayPopup>
);

export default MainPopup;
