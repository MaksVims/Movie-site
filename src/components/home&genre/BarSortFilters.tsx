import React, {FC, useMemo} from 'react';
import MoviesState from "@/store/MoviesState";
import {useAuth} from "@/contexts/AuthContext";
import {observer} from 'mobx-react-lite';
import SelectSortFiltersMovies from "@/components/ui/SelectSortFiltersMovies";
import getListActionsForBarFilters from '+/getListActionsForBarFilters';


const BarSortFilters: FC = () => {
  const filter = MoviesState.filter
  const {user} = useAuth()
  const data = useMemo(() => getListActionsForBarFilters(filter, user), [user, filter])

  return (
    <div className="mt-10 px-4">
      <div className="xss:hidden flex-center">
        <SelectSortFiltersMovies/>
      </div>
      <ul className="hidden xss:flex text-white flex-center space-x-5 text-xs sm:text-sm">
        {data.map(item => (
          <li key={item.title}>
            <button
              onClick={item.action}
              className={item.isActive ? 'text-primary-light pointer-events-none' : ''}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(BarSortFilters);