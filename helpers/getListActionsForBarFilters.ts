import {SortType} from "types";
import {User} from "firebase/auth";
import {MoviesState} from "@/store";

type SortFilterItem = { title: string, isActive: boolean, type: SortType, action: () => void }

export default function getListActionsForBarFilters(
  filter: SortType,
  user: User | null,
  notIncluded: SortType | undefined
): SortFilterItem[] {

  const set = MoviesState.setFilter.bind(MoviesState)
  const actions = [
    {
      title: 'Все',
      isActive: filter === SortType.DEFAULT,
      action: () => set(SortType.DEFAULT),
      type: SortType.DEFAULT
    },
    {
      title: 'По названию',
      isActive: filter === SortType.NAME,
      action: () => set(SortType.NAME),
      type: SortType.NAME
    },
    {
      title: 'По годам',
      isActive: filter === SortType.YEAR,
      action: () => set(SortType.YEAR),
      type: SortType.YEAR
    },
    {
      title: 'По рейтингу',
      isActive: filter === SortType.RATING,
      action: () => set(SortType.RATING),
      type: SortType.RATING
    },
  ]

  if (user) {
    actions.push({
      title: 'Избранное',
      isActive: filter === SortType.FAVORITE,
      action: () => set(SortType.FAVORITE),
      type: SortType.FAVORITE
    })
  }

  if (notIncluded) {
    return actions.filter(action => action.type !== notIncluded)
  }

  return actions
}