import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Introduction from './components/Introduction'
import Content from './components/Content'
import Footer from './components/Footer'
function App() {

  return (
    <Router>
    <div className="home light">
      <Navbar/>

        <Introduction/>
        <Content/>
      <Routes>
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
