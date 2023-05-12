import { useState } from 'react'
import PizzaCard from '../PizzaCard/PizzaCard'
import './menu.css'

const Menu = ({ category }) => {
  const [allOrders, setAllOrders] = useState({})
  const [total, setTotal] = useState(0)
  console.log('rerender')

  return (
    <>
      <div className='title'>{category} pizzas</div>
      <h1>All orders : {total}</h1>
      <div className='menu'>
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
    </>
  )
}

export default Menu
