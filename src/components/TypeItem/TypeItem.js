import './typeItem.css'

const TypeItem = ({ name, active, selectFilter }) => {
  const classStyle = active ? 'pizza-type active-type ' : 'pizza-type'

  return (
    <button className={classStyle} onClick={() => selectFilter(name)}>
      {name}
    </button>
  )
}

export default TypeItem
