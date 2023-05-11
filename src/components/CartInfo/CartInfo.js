import cart from '../../assets/cart-xs.svg'
import './cartInfo.css'

const CartInfo = () => {
  return (
    <div className='info'>
      <div className='details'>
        <p className='price'>75.50 €</p>
        <div className='divider'></div>
        <img src={cart} alt='cart' className='cart-img' />
        <p className='qty'>3</p>
      </div>
    </div>
  )
}

export default CartInfo
