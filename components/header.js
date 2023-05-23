import React, { useEffect, useState }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import Link from 'next/link'
import menuStyles from '../styles/menu.module.scss'
import { Popover } from '@headlessui/react';
import MegaMenu from '../components/megaMenu'

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".header").className = "header scroll"
      } else {
      document.querySelector(".header").className = "header";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);  

  return (
  <header className="header">
    <nav className="navbar navbar-expand-lg navbar-expand-md">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand" title="Car Portal">
            <Image src="/images/logo.png" height={40} width={130}  alt="logo"/>   
          </a>
        </Link>
        <button className={`navbar-toggler ${menuStyles.menuicon}`} type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <FontAwesomeIcon icon="bars" />
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end `} id="navbar">
          <ul className={`nav navbar-nav ${menuStyles.menu}`}>
            <li className="nav-item">
              <Link href="/"><a className={`nav-link ${menuStyles.siteNav}`}><span>Home</span></a></Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className={`nav-link ${menuStyles.siteNav}`}><MegaMenu/></a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#contactform"><a className={`nav-link ${menuStyles.siteNav}`}><span>Contact</span></a></Link>
            </li>
          </ul> 
        </div>     
      </div> 
    </nav>
  </header>
  )
}
