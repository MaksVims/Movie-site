import {useCallback, useState} from "react";
import {useAlert} from "@/contexts";
import errorsMessage from "@/const/errorsMessage";
import {AlertType} from "types";

export default function usePagination(totalPage: number, callback: (page: number) => Promise<void>)
  : [() => Promise<void>, boolean, number] {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const {showAlert} = useAlert()

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      await callback(page + 1)
      setPage(page + 1)
    } catch {
      showAlert(errorsMessage.LOAD_NEXT_PAGE_MOVIES, AlertType.ERROR)
    } finally {
      setLoading(false)
    }
  }, [page, callback])

  return [fetchData, loading, page]
}