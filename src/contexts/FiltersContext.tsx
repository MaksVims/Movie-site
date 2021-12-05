import React, {FC, useContext, useEffect, useState} from 'react';
import {IResponseFilterGenre} from "#/filtersTypes";
import {MovieService} from "@/api/MovieService";

export function useFilters() {
  return useContext(FiltersContextContainer)
}

const FiltersContextContainer = React.createContext<IResponseFilterGenre>({} as IResponseFilterGenre)

const FiltersContext: FC = ({children}) => {
  const [filters, setFilters] = useState<IResponseFilterGenre>()

  useEffect(() => {
    const fetchFilters = async () => {
      const result = await MovieService.getFilters()
      setFilters(result)
    }
    fetchFilters()
  }, [])

  return (
    <FiltersContextContainer.Provider value={filters!}>
      {children}
    </FiltersContextContainer.Provider>
  );
};

export default FiltersContext;