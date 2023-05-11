import { useState } from 'react'
import Menu from './components/Menu/Menu'
import MenuFilters from './components/MenuFilters/MenuFilters'
import Navigation from './components/Navigation/Navigation'

const App = () => {
  const [category, setCategory] = useState('')

  return (
    <div className='main'>
      <Navigation />
      <MenuFilters setCategory={setCategory} />
      <Menu category={category} />
    </div>
  )
}

export default App
