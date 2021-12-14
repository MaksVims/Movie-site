import {useState} from "react";
import {CustomError} from "@/factory/CustomError";

export function useFetch(callback: any): [(...args: any) => Promise<void>, boolean] {
  const [loading, setLoading] = useState<boolean>(false)

  const fetch = async (...args: any) => {
    try {
      setLoading(true)
      await callback.apply(null, args)
    } catch (e) {
      if (e instanceof Error) {
        throw new CustomError(e.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return [fetch, loading]
}