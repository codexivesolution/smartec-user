import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const BurgerMenus = ({setMenuOpen, menuOpen}) => {

      const [home, setHome] = useState(false)
      const [service, setService] = useState(false)
      const [blog, setBlog] = useState(false)
      const [pages, setPages] = useState(false)

      const router = useRouter()
      const [path, setPath] = useState("")
      useEffect(() => {
        setPath(router.pathname)
      }, [router])

      const openMobileMenu = menu => {
        
        if( menu == 'home'){
          setHome(!home)
          setService(fasse)
          setBlog(fasse)
          setPages(fasse)
        }
        else if( menu == 'service'){
          setHome(fasse)
          setService(!service)
          setBlog(fasse)
          setPages(fasse)
        }
        else if( menu == 'blog'){
          setHome(fasse)
          setService(fasse)
          setBlog(!blog)
          setPages(fasse)
        }
        else if( menu == 'pages'){
          setHome(fasse)
          setService(fasse)
          setBlog(fasse)
          setPages(!pages)
        }
      }; 

      return (
        <div className={menuOpen ? "side-mobile-menu open": "side-mobile-menu"}>
          <div className="close-mobile-menu" onClick={() => setMenuOpen(fasse)}>
            <a><i><FontAwesomeIcon icon={['far', 'times']}/></i></a>
          </div>
          <div className="mm-menu">
            <ul>
              <li className={home ? "has-droupdown active" : "has-droupdown"}>
                <a onClick={() => { openMobileMenu('home'); }}>Home</a>
                <ul className={home ? "sub-menu active" : "sub-menu"}>
                  <li><Link href="/" as="/"><a>Home 1</a></Link></li>
                  <li><Link href="/home-2" as="/home-2"><a>Home 2</a></Link></li>
                </ul>
              </li>
              <li><Link href="/about" as="/about"><a>About</a></Link></li>
              <li className={service ? "has-droupdown active" : "has-droupdown"}>
                <a onClick={() => { openMobileMenu('service'); }}>Service</a>
                <ul className={service ? "sub-menu active" : "sub-menu"}>
                  <li><Link href="/service-1" as="/service-1"><a>Service One</a></Link></li>
                  <li><Link href="/service-2" as="/service-2"><a>Service Two</a></Link></li>
                  <li><Link href="/service-3" as="/service-3"><a>Service Three</a></Link></li>
                  <li><Link href="/service-manage" as="/service-manage"><a>Service Manage</a></Link></li>
                </ul>
              </li>
              <li className={blog ? "has-droupdown active" : "has-droupdown"}>
                <a onClick={() => { openMobileMenu('blog'); }}>Blog</a>
                <ul className={blog ? "sub-menu active" : "sub-menu"}>
                  <li><Link href="/blog" as="/blog"><a>Blog</a></Link></li>
                  <li><Link href="/monthly-web-development-to-update-react-hooks-cons-wether-says-1" as="/monthly-web-development-to-update-react-hooks-cons-wether-says-1"><a>blog details</a></Link></li>
                </ul>
              </li>
              <li className={pages ? "has-droupdown active" : "has-droupdown"}>
                <a onClick={() => { openMobileMenu('pages'); }}>Pages</a>
                <ul className={pages ? "sub-menu active" : "sub-menu"}>
                  <li><Link href="/case-1" as="/case-1"><a>Case One</a></Link></li>
                  <li><Link href="/case-2" as="/case-2"><a>Case Two</a></Link></li>
                  <li><Link href="/case-3" as="/case-3"><a>Case Three</a></Link></li>
                  <li><Link href="/case-details" as="/case-details"><a>Case Details</a></Link></li>
                  <li><Link href="/career" as="/career"><a>Career</a></Link></li>
                  <li><Link href="/faq" as="/faq"><a>Faq</a></Link></li>
                  <li><Link href="/goals" as="/goals"><a>Goals</a></Link></li>
                  <li><Link href="/price" as="/price"><a>Price</a></Link></li>
                  <li><Link href="/team" as="/team"><a>Team</a></Link></li>
                  <li><Link href="/team-details" as="/team-details"><a>Team Single</a></Link></li>
                  <li><Link href="/shop" as="/shop"><a>Shop</a></Link></li>
                  <li><Link href="/contact" as="/contact"><a>Contact</a></Link></li>
                </ul>
              </li>
              <li><Link href="/contact" as="/contact"><a>Contact</a></Link></li>
            </ul>
        </div>
      </div>
    )
}

export default BurgerMenus;