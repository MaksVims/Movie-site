import React, {FC} from 'react';
import PanelSortFilters from "@/components/ui/PanelSortFilters";
import {SortType} from "#/filtersTypes";

const BarSortFiltersPerson: FC = () => {
  return (
    <div className='mt-2 space-x-4 md:space-x-6'>
      <PanelSortFilters
        classContainer="xss:flex"
        type="gray"
        notIncluded={SortType.YEAR}
      />
    </div>
  );
};

export default BarSortFiltersPerson;