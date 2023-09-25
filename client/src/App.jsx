import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogList from './components/BlogCard'
import BlogPage from './pages/BlogPage'
import { Route, Routes } from 'react-router-dom'
import AddBlog from './pages/AddBlog'

function App() {
  return (
    <Routes>
      <Route path='/' element={<BlogPage />} />
      <Route path='/addblog' element={<AddBlog />} />
    </Routes>
  )
}

export default App
