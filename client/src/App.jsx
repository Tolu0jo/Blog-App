import './App.css'
import Header from './components/header/Header'
import TopBar from './components/topbar/topbar'
import Single from './pages/Single/single'
import Write from './pages/Write/Write'
import Home from './pages/home/Home'

function App() {
  return (
    <div className='app'>
   <TopBar/>
   {/* <Home/> */}
   {/* <Single/> */}
   <Write/>
  
    </div>
   
  )
}

export default App
