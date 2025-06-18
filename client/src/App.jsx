import { Outlet } from 'react-router'
import './app.css'

import LeftBar from './components/leftBar/leftBar'
import TopBar from './components/topBar/topBar'

const App = () => {
  return (
    <div className='app'>
      <LeftBar/>
      <div className="content">
        <TopBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App