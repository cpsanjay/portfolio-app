import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes, FaGithub, FaLinkedinIn, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs' 
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);
  return (
    <div className='fixed flex w-full h-[80px] justify-between text-gray-300 items-center px-4 bg-[#0a192f]'>
        <div>
            <img src={Logo} alt="LogoImage" width='50px' />
        </div>


        {/* Menu */}


        <ul className='hidden md:flex'>
            <li className='px-2'>
                <Link to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li className='px-2'>
                <Link to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li className='px-2'>
                <Link to="skills" smooth={true} duration={500} >
                    Skils
                </Link>
            </li>
            <li className='px-2'>
                <Link to="work" smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            <li className='px-2'>
                <Link to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>


    {/* Hamburger */}

    <div onClick={handleNav} className=' md:hidden z-10'>
        {!nav? <FaBars/> : <FaTimes />}
    </div>


    {/* Mobile Menu */}

    <div className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center ease-out duration-300' : "absolute top-0 left-[-100%] w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center ease-out duration-300"}>
        <ul>
            <li className=' py-6 text-4xl'>
                <Link onClick={handleNav} to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>
            <li className=' py-6 text-4xl'>
                <Link  onClick={handleNav}  to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>
            <li className=' py-6 text-4xl'>
                <Link  onClick={handleNav}  to="skills" smooth={true} duration={500} >
                    Skils
                </Link>
            </li>
            <li className=' py-6 text-4xl'>
                <Link  onClick={handleNav}  to="work" smooth={true} duration={500} >
                    Work
                </Link>
            </li>
            <li className=' py-6 text-4xl'>
                <Link  onClick={handleNav}  to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>
    </div>
    {/* Social Icons */}
    <div className='hidden md:flex flex-col fixed top-[35%] left-0'>
        <ul>
            <li className='flex w-[160px] h-[60px] ml-[-100px] hover:ml-[10%] duration-300 '><a className='flex justify-between items-center w-full' href="/">LinkedIn<FaLinkedinIn size={30}/></a></li>
            <li className='flex w-[160px] h-[60px] ml-[-100px] hover:ml-[10%] duration-300 '><a className='flex justify-between items-center w-full' href="/">Github<FaGithub size={30}/></a></li>
            <li className='flex w-[160px] h-[60px] ml-[-100px] hover:ml-[10%] duration-300 '><a className='flex justify-between items-center w-full' href="/">Email<HiOutlineMail size={30}/></a></li>
            <li className='flex w-[160px] h-[60px] ml-[-100px] hover:ml-[10%] duration-300 '><a className='flex justify-between items-center w-full' href="/">Resume<BsFillPersonLinesFill size={30}/></a></li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar