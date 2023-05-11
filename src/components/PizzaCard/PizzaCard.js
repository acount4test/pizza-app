import img from '../../assets/pizzas/cheesburger.svg'
import './pizzaCard.css'

const PizzaCard = () => {
  return (
    <div className='card'>
      <img className='card-img' src={img} alt='cheesburger' />
      <div className='title'></div>
      <div className='description'>
        <div className='recipe'>
          <div>Thin-crust</div>
          <div>Traditional</div>
        </div>
        <div className='size'>
          <p>26 cm.</p>
          <p>30 cm.</p>
          <p>40 cm.</p>
        </div>
      </div>
      <div className='details'>
        <p className='pizza-price'>15 €</p>
        <button className='add'>
          <span className='plus'></span>Add to Cart{' '}
          <span className='qty'>2</span>
        </button>
      </div>
    </div>
  )
}

export default PizzaCard
