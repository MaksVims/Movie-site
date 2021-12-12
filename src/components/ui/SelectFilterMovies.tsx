import React, {ChangeEvent, FC} from 'react';
import {SortType} from "#/filtersTypes";
import MoviesState from "@/store/MoviesState";
import {observer} from 'mobx-react-lite';

const SelectFilterMovies: FC = () => {

  const changeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    // @ts-ignore
    MoviesState.setFilter(e.target.value)
  }

  return (
    <select value={MoviesState.filter} onChange={changeFilter}>
      <option value={SortType.DEFAULT}>Все</option>
      <option value={SortType.NAME}>По имени</option>
      <option value={SortType.YEAR}>По году</option>
      <option value={SortType.RATING}>По рейтингу</option>
      <option value={SortType.FAVORITE}>Избранные</option>
    </select>
  );
};

export default observer(SelectFilterMovies);