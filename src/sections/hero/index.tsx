import React from 'react'
import styles from './index.module.css'
import Button from '@/components/button'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero_section} id='hero'>
      <h1>
        The ultimate aroma and taste, for blissful <span>relaxation</span>.
      </h1>

      <p>
        Elevate your tea experience and discover the perfect balance of tranquility and taste, 
        sip by sip. Welcome to a journey where every cup is a celebration of serenity and indulgence.
      </p>

      <Button 
        content='Buy Now'
      />
    </section>
  )
}

export default Hero