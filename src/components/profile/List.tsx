import React from 'react';

interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
}

function List<T>(props: ListProps<T>) {
  const {renderItem, items} = props
  return (
    <ul>
      {items.map(renderItem)}
    </ul>
  )
}

export default List