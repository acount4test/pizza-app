import { useEffect, useState } from 'react'
import img from '../../assets/pizzas/cheesburger.svg'

const PizzaCard = ({ name, allOrders, setAllOrders, setTotal }) => {
  const [order, setOrder] = useState(null)
  const [title, setTitle] = useState(name)
  const [totalCount, setTotalCount] = useState(0)

  console.log('rerender')

  const handleClick = () => {
    setOrder(order => order + 1)
    setTotalCount(count => count + 1)
  }

  useEffect(() => {
    setAllOrders(() => ({
      ...allOrders,
      [title]: totalCount
    }))

    const total = Object.values(allOrders).reduce(
      (acc, value) => acc + value,
      0
    )

    setTotal(total)
  }, [totalCount])

  const btnStyle = order
    ? 'card__details-add card__details-add--active'
    : 'card__details-add'
  const plusSignStyle = order
    ? 'card__details-plus card__details-plus--active'
    : 'card__details-plus`'

  return (
    <div className='card'>
      <img className='card__img' src={img} alt='cheesburger' />
      <div className='card__title'>{name.toUpperCase()}</div>
      <div className='card__description'>
        <div className='card__description-recipe'>
          <div className='card__description-recipe--active'>Thin-crust</div>
          <div>Traditional</div>
        </div>
        <div className='card__description-size'>
          <p>26 cm.</p>
          <p className='card__description-size--active'>30 cm.</p>
          <p>40 cm.</p>
        </div>
      </div>
      <div className='card__details'>
        <div className='card__details-price'>from 15€</div>
        <button className={btnStyle} onClick={handleClick}>
          <span className={plusSignStyle}></span>Add to Cart{' '}
          <div className='card__details-qty'>{order}</div>
        </button>
      </div>
    </div>
  )
}

export default PizzaCard
