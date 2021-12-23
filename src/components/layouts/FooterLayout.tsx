import React, { FC } from 'react';
import { Footer } from '@/components/footer';

const FooterLayout: FC = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default FooterLayout;
