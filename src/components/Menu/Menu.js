import { useState } from 'react'
import PizzaCard from '../PizzaCard/PizzaCard'

const Menu = ({ category }) => {
  const [allOrders, setAllOrders] = useState({})
  const [total, setTotal] = useState(0)

  return (
    <div className='menu'>
      <div className='menu__title'>{category} pizzas</div>
      <h1>All orders : {total}</h1>
      <div className='menu__items'>
        <PizzaCard
          name={'barbecue'}
          allOrders={allOrders}
          setAllOrders={setAllOrders}
          setTotal={setTotal}
        />
        <PizzaCard
          name={'cheesburger'}
          allOrders={allOrders}
          setAllOrders={setAllOrders}
          setTotal={setTotal}
        />
        <PizzaCard
          name={'barbecue'}
          allOrders={allOrders}
          setAllOrders={setAllOrders}
          setTotal={setTotal}
        />
        <PizzaCard
          name={'cheesburger'}
          allOrders={allOrders}
          setAllOrders={setAllOrders}
          setTotal={setTotal}
        />
        <PizzaCard
          name={'peperoni'}
          allOrders={allOrders}
          setAllOrders={setAllOrders}
          setTotal={setTotal}
        />
        <PizzaCard
          name={'peperoni'}
          allOrders={allOrders}
          setAllOrders={setAllOrders}
          setTotal={setTotal}
        />
      </div>
    </div>
  )
}

export default Menu
