import { useEffect, useState } from 'react'
import SortFilters from '../SortFilters/SortFilters'
import TypesFilter from '../TypesFilter/TypesFilter'
import './menuFilters.css'

const MenuFilters = ({ setCategory }) => {
  const [queries, setQueries] = useState({ filter: 'All', sort: 'Popularity' })
  console.log(queries)

  useEffect(() => {
    setCategory(queries.filter)
  }, [queries])

  return (
    <section className='menu-filters'>
      <TypesFilter setQueries={setQueries} queries={queries} />
      <SortFilters setQueries={setQueries} queries={queries} />
    </section>
  )
}

export default MenuFilters
