import React, {FC} from 'react';
import Header from "@/components/header/Header";
import {useAuth} from "@/contexts/AuthContext";
import MainSiteLoader from "@/components/ui/MainSiteLoader";

const MainLayout: FC = ({children}) => {
  const {loadingUser} = useAuth()

  if (loadingUser) {
    return <MainSiteLoader/>
  }

  return (
    <div className="flex flex-col h-full">
      <Header/>
      {children}
    </div>
  );
};

export default MainLayout;