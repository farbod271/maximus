import React from 'react'
import './styles.css'
import Nav from './Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Nav/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
    </>
    
  )


}

export default App