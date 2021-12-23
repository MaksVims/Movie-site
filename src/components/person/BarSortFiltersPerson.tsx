import React, { FC } from 'react';
import { SortType } from 'types';
import { PanelSortFilters } from '@/components/ui';

const BarSortFiltersPerson: FC = () => (
  <div className="mt-2 space-x-4 md:space-x-6">
    <PanelSortFilters
      classContainer="xss:flex"
      type="gray"
      notIncluded={SortType.YEAR}
    />
  </div>
);

export default BarSortFiltersPerson;
