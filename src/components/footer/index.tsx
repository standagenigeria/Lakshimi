import React from 'react'
import styles from './index.module.css'
import Button from '../button'

// assets
import logo from '@/assets/icons/logo.svg'
// import twitter from '@/assets/icons/twitter.svg'
import instagram from '@/assets/icons/instagram.svg'
// import linkedIn from '@/assets/icons/linkedIn.svg'
// import facebook from '@/assets/icons/facebook.svg'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer_container}>
        <section>
            <div>
                <h1>
                    Indulge in the Extraordinary. <br /> <span>Elevate Your Sip</span>, Elevate Your Life.
                </h1>

                <p>
                    Ready to embark on a journey of unparalleled taste and tranquility? Choose Lakshimi Japanese 
                    Tea where every cup is a celebration of flavor, wellness, and pure indulgence.
                </p>

                <Button 
                    content='Buy Now'
                />
            </div>
        </section>

        <div className={styles.icons_container}>
            <img src={logo} alt='' />

            <p>Follow Us</p>

            <div>
                <a target='_blank' href='https://www.instagram.com/lakshimi_international/?igsh=b3d3NWpsOHJxeW5s'>
                    <img src={instagram} alt='' />
                </a>

                {/* <img src={twitter} alt='' />
                <img src={linkedIn} alt='' />
                <img src={facebook} alt='' /> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer