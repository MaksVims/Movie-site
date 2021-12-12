import {IDataFilterGenre, IFilterCountry, IFilterGenre} from "#/filtersTypes";
import {makeAutoObservable} from "mobx";
import {DATA_FILTERS} from "@/const/dataFilters";

class FiltersState {

  filters: IDataFilterGenre

  constructor() {
    this.filters = DATA_FILTERS
    makeAutoObservable(this)
  }


  get allGenres(): IFilterGenre[] {
    return this.filters.genres
  }

  get allCountries(): IFilterCountry[] {
    return this.filters.countries
  }
}

export default new FiltersState()