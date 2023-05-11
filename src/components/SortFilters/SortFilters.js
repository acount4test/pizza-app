import { useEffect, useState } from 'react'
import { sortTypes } from '../../lib/sortTypes'
import './sortFilters.css'

const SortFilters = ({ queries, setQueries }) => {
  const [query, setQuery] = useState('Popularity')

  const selectSortQuery = e => {
    setQueries({
      ...queries,
      sort: query
    })
  }

  useEffect(() => selectSortQuery, [query])

  return (
    <div className='sort-filters'>
      <div className='arrow-up'></div>
      <p className='sort-type'>Sort by:</p>
      <select
        className='sort-select'
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
