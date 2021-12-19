import React, {FC} from 'react';
import {Footer} from "@/components/footer";

const FooterLayout: FC = ({children}) => {
  return (
    <>
      {children}
      <Footer/>
    </>
  );
};

export default FooterLayout;