const TypeItem = ({ name, active, selectFilter }) => {
  const classStyle = active ? 'pizza-type pizza-type--active ' : 'pizza-type'

  return (
    <button className={classStyle} onClick={() => selectFilter(name)}>
      {name}
    </button>
  )
}

export default TypeItem
