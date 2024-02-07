import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Introduction from './components/Introduction'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="home light">
      <Navbar/>

        <Introduction/>
      <Routes>
      </Routes>
    </div>
    </Router>
  )
}

export default App
