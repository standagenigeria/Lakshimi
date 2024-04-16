import React, { useState } from 'react';
import styles from "./index.module.css";
import useSticky from '@/hooks/useStickyHook';
import { Link } from 'react-scroll';

// assets
import logo from '@/assets/icons/logo.svg';

const navItems = [
  { id: 1, item: "Home", linkTo: "hero"},
  { id: 2, item: "About", linkTo: "about"},
  { id: 3, item: "Products", linkTo: "products"},
  { id: 4, item: logo, linkTo: '' },
  { id: 5, item: "Features", linkTo: "features"},
  { id: 6, item: "Awards", linkTo: "awards"},
  { id: 7, item: "FAQ", linkTo: "faq"},
];

const Header: React.FC = () => {
  const [active, setActive] = useState(false);
  const { sticky, stickyRef } = useSticky();

  return (
    <>
      <header ref={stickyRef} className={`${active ? styles.active : ""}`}>
        <div className={styles.header}>
          <img src={logo} className={styles.header_logo} />

          <nav>
            <ul>
              {navItems.map((navlink)=>
                <li key={navlink.id}>
                  {navlink.id !== 4 ?
                    <Link 
                      to={navlink.linkTo} 
                      spy={true} 
                      smooth={true} 
                      offset={(sticky && stickyRef.current?.clientHeight )? 45 - stickyRef.current?.clientHeight : 50} 
                      duration={500} 
                      onClick={()=> setActive(!active)}
                    >
                      {navlink.item}
                    </Link> :
                    <img src={navlink.item} className={styles.logo} />
                  }
                </li>
              )}
            </ul>
          </nav>

          <div className={styles.overlay}></div>
                        
          <div className={styles.hamburger} onClick={()=> setActive(!active)}>
            <div className={styles.bar}></div>
          </div>
        </div>
      </header>

      <div style={{
        height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
      }} />
    </>
  )
}

export default Header