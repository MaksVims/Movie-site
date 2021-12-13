import React, {FC} from 'react';
import {observer} from 'mobx-react-lite';
import SelectSortFiltersMovies from "@/components/ui/SelectSortFiltersMovies";
import PanelSortFilters from "@/components/ui/PanelSortFilters";

const BarSortFilters: FC = () => {
  return (
    <div className='mt-10 px-4'>
      <div className="xss:hidden flex-center ">
        <SelectSortFiltersMovies
          className="bg-primary-dark text-white border-2 border-solid"
        />
      </div>
      <PanelSortFilters
        classContainer="hidden xss:flex"
      />
    </div>
  );
};

export default observer(BarSortFilters);