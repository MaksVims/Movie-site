import React, {FC, useContext, useEffect, useState} from 'react';
import {IResponseFilterGenre} from "#/filtersTypes";
import {MovieService} from "@/api/MovieService";

export function useFilters() {
  return useContext(FiltersContext)
}

const FiltersContext = React.createContext<IResponseFilterGenre>({} as IResponseFilterGenre)

const FiltersProvider: FC = ({children}) => {
  const [filters, setFilters] = useState<IResponseFilterGenre>()

  useEffect(() => {
    const fetchFilters = async () => {
      const result = await MovieService.getFilters()
      setFilters(result)
    }
    fetchFilters()
  }, [])

  return (
    <FiltersContext.Provider value={filters!}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;