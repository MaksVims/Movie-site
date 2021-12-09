import React, {FC} from 'react';
import Header from "@/components/header/Header";

const MainLayout: FC = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  );
};

export default MainLayout;