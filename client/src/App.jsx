import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login'
import Register from './pages/Register';
import Single from './pages/Single';
import Write from './pages/Write';
import "./style.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='app'>
      <div className="container">
      <BrowserRouter >
    <Routes>
      <Route path="/login" element={< Login/>} />
      <Route path="/register" element={< Register/>} />
      <Route path="/" element={<>< NavBar/><Home/><Footer/></>} />
      <Route path="/post/:id" element={<>< NavBar/><Single/><Footer/></>} />
      <Route path="/write" element={<>< NavBar/><Write/><Footer/></>} />
    </Routes>
  </BrowserRouter>
    </div>
    </div>
  )
}

export default App
