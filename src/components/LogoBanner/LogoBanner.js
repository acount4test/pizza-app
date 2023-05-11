import logo from '../../assets/logo.svg'
import './logoBanner.css'

const LogoBanner = () => {
  return (
    <div className='logo'>
      <img scr={logo} alt='logo' />
      <div>
        <div className='title'>PIZZA HOUSE</div>
        <div className='description'>The best pizza in the whole world!</div>
      </div>
    </div>
  )
}

export default LogoBanner
