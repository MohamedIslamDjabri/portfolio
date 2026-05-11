import React from 'react'
import {FaLinkedin ,FaGithub,FaInstagram,FaTwitter,} from "react-icons/fa"
import logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='Home'>
                <img src={logo} className='mx-2' width={150} height={100} alt="logo" />
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="#projects" className="hover:underline transition">
                My Projects
            </a>
        {/* <a href="#about">About</a> 
            <a href="#contact">Contact</a>
            <a href=""
               target='_blank'
               rel="noopener noreferrer"
               aria-label='LinkedIn'>
                <FaLinkedin />
            </a>
            <a href=""
               target='_blank'
               rel="noopener noreferrer"
               aria-label='GitHub'>
                <FaGithub />
            </a>
            <a href=""
               target='_blank'
               rel="noopener noreferrer"
               aria-label='Instagram'>
                <FaInstagram />
            </a>
            <a href=""
               target='_blank'
               rel="noopener noreferrer"
               aria-label='Twitter'>
                <FaTwitter />
            </a> */}
        </div>
    </nav>
  )
}

export default Navbar