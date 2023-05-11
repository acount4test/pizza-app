import { useState } from 'react'
import { pizzaTypes } from '../../lib/pizzaTypes'
import TypeItem from '../TypeItem/TypeItem'
import './typesFilter.css'

const TypesFilter = ({ queries, setQueries }) => {
  const [filter, setFilter] = useState('All')
  console.log(filter)

  const selectFilter = name => {
    setFilter(name)
    setQueries({
      ...queries,
      filter: name
    })
  }

  return (
    <>
      <div className='types'>
        {pizzaTypes.map(({ name, active }) => (
          <TypeItem
            key={name}
            id={name}
            name={name}
            selectFilter={selectFilter}
            active={(active = name === filter)}
          />
        ))}
      </div>
    </>
  )
}

export default TypesFilter
