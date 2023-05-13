import logo from '../../assets/logo.svg'

const LogoBanner = () => {
  return (
    <div className='logo'>
      <img scr={logo} alt='logo' />
      <div>
        <div className='log__title'>PIZZA HOUSE</div>
        <div className='logo__description'>
          The best pizza in the whole world!
        </div>
      </div>
    </div>
  )
}

export default LogoBanner
