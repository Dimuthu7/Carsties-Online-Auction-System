import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import { Search } from './Search';
import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <header className='
        sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md
    '>
        <Logo />
        <Search />
        <div>Login</div>
    </header>
  )
}
