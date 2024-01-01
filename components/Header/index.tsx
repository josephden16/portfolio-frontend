import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";


const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <MobileNav isNavOpen={navOpen} toggleNav={toggleNav} />
      <nav role="navigation" className="mt-2 flex flex-row justify-between items-center">
        <Logo />
        <Links />
        <Menu openNav={() => setNavOpen(!navOpen)} />
      </nav>
    </>
  )
}

const Links = () => {
  return (
    <div className="flex-row items-center space-x-6 text-sm hidden lg:flex">
      {/* <Link href="/blog">
        <a className="bg-white hover:bg-black hover:text-white border-2 transition-colors duration-300 border-white text-black text-sm pl-3 pr-3 pt-2 pb-2">
          Blog
        </a>
      </Link> */}
      <Link href="/contact">
        <a className="bg-white hover:bg-black hover:text-white border-2 transition-colors duration-300 border-white text-black text-xs pl-3 pr-3 pt-2 pb-2">
          Contact
        </a>
      </Link>
      <Link href="/projects">
        <a className="bg-black hover:bg-white hover:text-black border-2 transition-colors duration-300 border-black text-white font-bold text-xs pl-3 pr-3 pt-2 pb-2">
          View Work
        </a>
      </Link>
    </div>
  )
}

const MobileNav = ({ isNavOpen, toggleNav }) => {
  return (
    <nav role="navigation" className={isNavOpen ? styles.mobileNav + ` ${styles.display}` : styles.mobileNav}>
      <div style={{ backgroundColor: 'black', color: 'white' }} className="flex flex-col fixed w-full h-full lg:hidden top-0 left-0 z-50 text-5xl pl-3 pt-3 pb-10">
        <button onClick={toggleNav} style={{ outline: 'none' }} className="absolute -right-2 top-0 hover:bg-white hover:text-black p-2 float-right text-3xl mr-2">Close</button>
        <div className="space-y-16 mt-14 flex flex-col">
          <Link href="/">
            <a className="hover:text-creamy-green transition-colors duration-300">
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="hover:text-bluish-green transition-colors duration-300">
              Blog
            </a>
          </Link>
          <Link href="/projects">
            <a className="hover:text-yellow-400 transition-colors duration-300">
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-red-500 transition-colors duration-300">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

const Menu = ({ openNav }) => {
  return (
    <div className="lg:hidden">
      <button onClick={openNav} style={{ outline: 'none' }} className="hover:bg-white hover:text-black border-2 border-black bg-black text-white pt-1 pb-1 pl-2 pr-2">Menu</button>
    </div>
  )
}

const Logo = () => {
  return (
    <Link href="/">
      <a className="-ml-1 flex items-center space-x-1">
        <img src="/favicon-32x32.png" alt="Denedo Joseph" />
        <span className="text-base lg:text-lg font-semibold">Denedo Joseph</span>
      </a>
    </Link>
  )
}


export default Header;
//TODO: start work on navigation animation
