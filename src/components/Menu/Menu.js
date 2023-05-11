import PizzaCard from '../PizzaCard/PizzaCard'
import './menu.css'

const Menu = ({ category }) => {
  console.log('rerender')
  return (
    <>
      <div className='title'>{category} pizzas</div>
      <div className='menu'>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </>
  )
}

export default Menu
