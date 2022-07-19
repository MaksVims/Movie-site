import React, { FC } from 'react'
import { Loader } from '@/components/ui';
import { MovieForGrid } from '@/factory/MovieForGrid';

interface PaginationBox {
  loading: boolean,
  movies: MovieForGrid[]
}

const PaginationBox: FC<PaginationBox> = ({ loading, children, movies }) => {
  return (
    <div 
    className={`relative bg-primary-dark ${movies.length && "h-[100px]"}`}>
      {loading ? <Loader /> : children}
    </div>
  )
}

export default PaginationBox