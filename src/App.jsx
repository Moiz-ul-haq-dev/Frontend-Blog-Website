import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateBlog from './components/CreateBlog'
import ReadBlog from './components/ReadBlog'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ReadBlog />} />
          <Route path="/Create" element={<CreateBlog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
