import { useEffect, useState } from 'react'
import { sortTypes } from '../../libs/sortTypes'

const SortFilters = ({ queries, setQueries }) => {
  const [query, setQuery] = useState('Popularity')

  const selectSortQuery = () => {
    setQueries({
      ...queries,
      sort: query
    })
  }

  useEffect(() => selectSortQuery, [query.filter])

  return (
    <div className='sort-filters'>
      <div className='sort-filters__arrow-up'></div>
      <p className='sort-filters__name'>Sort by:</p>
      <select
        className='sort-filters__select'
        value={query}
        onChange={e => setQuery(e.target.value)}
      >
        {sortTypes.map(type => (
          <option key={type}>{type}</option>
        ))}
      </select>
    </div>
  )
}

export default SortFilters
