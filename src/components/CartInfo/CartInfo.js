import cart from '../../assets/cart-xs.svg'

const CartInfo = () => {
  return (
    <button className='cart'>
      <a className='cart-details'>
        <p className='cart-details__price'>75.50 €</p>
        <div className='cart-details__divider'></div>
        <img src={cart} alt='cart' className='cart-details__img' />
        <p className='cart-details__qty'>3</p>
      </a>
    </button>
  )
}

export default CartInfo
