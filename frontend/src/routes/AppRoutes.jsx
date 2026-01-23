import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/user/register" element={<h1>user registration</h1>}></Route>
            <Route path="/user/login" element={<h1>user login</h1>}></Route>
            <Route path="/food-partner/register" element={<h1>food partner registration</h1>}></Route>
            <Route path="/food-partner/login" element={<h1>food partner login</h1>}></Route>
        </Routes>
</Router>
  )
}

export default AppRoutes