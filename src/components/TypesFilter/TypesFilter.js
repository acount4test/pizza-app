import { useState } from 'react'
import { pizzaTypes } from '../../libs/pizzaTypes'
import TypeItem from '../TypesItem/TypesItem'

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
      <div className='types-filter'>
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
