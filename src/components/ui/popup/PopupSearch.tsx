import React, {FC, FormEvent, useState} from 'react';
import OverlayPopup from "@/components/ui/popup/OverlayPopup";
import {useRouter} from "next/router";

interface PopupSearchProps {
  onClose: () => void,
  isOpened: boolean
}

const PopupSearch: FC<PopupSearchProps> = ({onClose, isOpened}) => {
  const [query, setQuery] = useState('')
  const router = useRouter()

  const searchMoviesByWord = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (query) {
      router.push(`/search?keyword=${query}`)
      setQuery('')
      onClose()
    }
  }

  return (
    <OverlayPopup
      onClose={onClose}
      isOpened={isOpened}
      className="items-start"
    >
      <div>
        <form onSubmit={searchMoviesByWord}>
          <input
            type="search"
            value={query}
            className="input w-[500px] h-12 text-2xl p-4 mt-10"
            placeholder="Введите название"
            onChange={e => setQuery(e.target.value)}
          />
        </form>
      </div>
    </OverlayPopup>
  );
};

export default PopupSearch;