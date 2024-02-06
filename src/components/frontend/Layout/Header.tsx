import React from 'react'
import MainMenu from './MainMenu';

const Header = () => {
  return (
    <>
       <header className="flex bg-black sticky top-0 shadow-md z-[999]">
        <div className="container mx-auto">
          <nav className=" flex justify-between">
            <div>
              <h3 className="text-[18px] text-white font-Inter font-bold">
                BaseUI
              </h3>
            </div>
            <MainMenu />
          </nav>
        </div>
      </header>     
    </>
  )
}

export default Header;