import { useEffect, useState } from 'react'
import img from '../../assets/pizzas/cheesburger.svg'
import './pizzaCard.css'

const PizzaCard = ({ name, allOrders, setAllOrders, setTotal }) => {
  const [order, setOrder] = useState(null)
  const [title, setTitle] = useState(name)
  const [totalCount, setTotalCount] = useState(0)

  const total = Object.values(allOrders).reduce((acc, value) => acc + value, 0)

  const handleClick = () => {
    setOrder(order => order + 1)
    setTotalCount(count => count + 1)
  }

  useEffect(() => {
    setAllOrders(() => ({
      ...allOrders,
      [title]: totalCount
    }))

    setTotal(total)
  }, [totalCount])

  const btnStyle = order ? 'add active-add' : 'add'
  const plusSignStyle = order ? 'plus active-plus' : 'plus'

  return (
    <div className='card'>
      <img className='card-img' src={img} alt='cheesburger' />
      <div className='title card-title'>{name.toUpperCase()}</div>
      <div className='description'>
        <div className='recipe'>
          <div className='active-recipe'>Thin-crust</div>
          <div>Traditional</div>
        </div>
        <div className='size'>
          <p>26 cm.</p>
          <p className='active-size'>30 cm.</p>
          <p>40 cm.</p>
        </div>
      </div>
      <div className='card-details'>
        <div className='pizza-price'>from 15€</div>
        <button className={btnStyle} onClick={handleClick}>
          <span className={plusSignStyle}></span>Add to Cart{' '}
          <div className='qty'>{order}</div>
        </button>
      </div>
    </div>
  )
}

export default PizzaCard
