import {SortType} from "#/filtersTypes";
import {User} from "firebase/auth";
import MoviesState from "@/store/MoviesState";

export default function getListActionsForBarFilters(filter: SortType, user: User | null)
  : { title: string, isActive: boolean, action: () => void }[] {
  const set = MoviesState.setFilter.bind(MoviesState)
  const actions = [
    {
      title: 'Все',
      isActive: filter === SortType.DEFAULT,
      action: () => set(SortType.DEFAULT)
    },
    {
      title: 'По названию',
      isActive: filter === SortType.NAME,
      action: () => set(SortType.NAME)
    },
    {
      title: 'По годам',
      isActive: filter === SortType.YEAR,
      action: () => set(SortType.YEAR)
    },
    {
      title: 'По рейтингу',
      isActive: filter === SortType.RATING,
      action: () => set(SortType.RATING)
    },
  ]

  if (user) {
    actions.push({
      title: 'Избранное',
      isActive: filter === SortType.FAVORITE,
      action: () => set(SortType.FAVORITE)
    })
  }

  return actions
}