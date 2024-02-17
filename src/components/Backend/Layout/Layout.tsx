import React from 'react'
import { Outlet } from 'react-router-dom'
import { RootState, useAppSelector } from '../../../store/store'

const BLayout = () => {
 
  const userState = useAppSelector((state:RootState)=>state.LOGIN_USER);
  if(!userState.name){
    return window.location.href = '/login';
  }
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