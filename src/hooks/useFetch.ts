import {useState} from "react";

export function useFetch(callback: any): [(...args: any) => Promise<void>, boolean, any] {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null)

  const fetch = async (...args: any) => {
    try {
      setLoading(true)
      await callback.apply(null, args)
    } catch (e) {
      // @ts-ignore
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return [fetch, loading, error]
}