import React from 'react'
import { Outlet } from 'react-router-dom'

const BLayout = () => {
  
  return (
    <>
      <header>Header</header>
      <aside>Sidebar</aside>
      <main><Outlet /></main>
      <footer>Footer</footer>
    </>
  )
}

export default BLayout;