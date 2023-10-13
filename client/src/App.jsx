import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogList from './components/BlogCard'
import BlogPage from './pages/BlogPage'
import { Route, Routes } from 'react-router-dom'
import AddBlog from './pages/AddBlog'
import ReadBlog from './pages/ReadBlog'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/User/Profile'
import RequireAuth from './components/Auth/RequireAuth'
import NewsCategoryPage from './pages/NewsCategoryPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<BlogPage />} />
      <Route path='/blog/:_id' element={<ReadBlog />} />

      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />

      <Route path='/category/news' element={<NewsCategoryPage />} />
      <Route element={<RequireAuth />}>
        <Route path='/addblog' element={<AddBlog />} />
        <Route path='/user/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
