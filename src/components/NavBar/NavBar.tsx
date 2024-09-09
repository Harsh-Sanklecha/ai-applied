"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/logo.jpeg'
import './NavBar.scss'
import Link from 'next/link'
import gsap from 'gsap';

const NavBar = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768; // Assuming mobile at <= 768px
  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    const tl = gsap.timeline();

    if (isOpen) {
      tl.to('.line1', { y: 7.5, duration: 0.4, ease: 'power4.out' })
        .to('.line2', { opacity: 0, duration: 0.01, ease: 'power4.out' }, "-=0.3")
        .to('.line3', { y: -7.5, duration: 0.4, ease: 'power4.out' }, "-=0.45")

      tl.to('.line1', { rotateZ: 140, duration: 0.4, ease: 'bounce.out' })
        .to('.line3', { y: -8, rotateZ: 40, duration: 0.4, ease: 'bounce.out' }, "-=0.45")


      if (isMobile) {
        tl.to('.drawer', { x: 0, opacity: 1, autoAlpha: 1, duration: 0.4, ease: 'back.in' }, '-=0.8');
      }

    } else {
      tl.to('.line1', { rotateZ: 0, duration: 0.4, ease: 'power4.out' })
        .to('.line3', { rotateZ: 0, duration: 0.4, ease: 'power4.out' }, '-=0.3')

      tl.to('.line1', { y: 0, duration: 0.4, ease: 'bounce.out' })
        .to('.line2', { opacity: 1, duration: 0.01, ease: 'bounce.out' }, "-=0.3")
        .to('.line3', { y: 0, duration: 0.4, ease: 'bounce.out' }, "-=0.45")

      if (isMobile) {
        tl.to('.drawer', { x: '-100%', opacity: 0 ,autoAlpha: 0, duration: 0.4, ease: 'power4.out' }, '-=0.8');

      }
    }

    return () => {
      tl.kill();
    }
  }, [isOpen, isMobile]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="bg-white w-full z-20 top-0 start-0 container">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={Logo} height={72} alt="AI Applied" />
        </a>
        <button type="button" className="primary-btn header-cta md:order-2">Get Access</button>
        <div className="menu" onClick={toggleMenu}>
          <div className="icon-wrapper">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link href="/" className="py-2 px-3 text-gray-500 hover:text-primary-500" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/#why-us" className="py-2 px-3 text-gray-500 hover:text-primary-500">Why Us</Link>
            </li>
            <li>
              <Link href="/#about" className="py-2 px-3 text-gray-500 hover:text-primary-500">About</Link>
            </li>
          </ul>
        </div>
      </div>
        <div className="drawer container">
        <ul className="flex flex-col gap-6 h-full">
          <li>
            <Link href="/" className="text-gray-400 hover:text-primary-500 text-4xl" aria-current="page" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link href="/#why-us" className="text-gray-400 hover:text-primary-500 text-4xl" onClick={toggleMenu}>Why Us</Link>
          </li>
          <li>
            <Link href="/#about" className="text-gray-400 hover:text-primary-500 text-4xl" onClick={toggleMenu}>About</Link>
          </li>
          <div className="my-auto"></div>
          <button type="button" className="primary-btn" style={{ width: '100%' }}>Get Access</button>
        </ul>
        </div>
    </nav>

  )
}

export default NavBar