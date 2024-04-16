import React from 'react'
import styles from './index.module.css'
import Hero from '@/sections/hero'
import About from '@/sections/about'
import Products from '@/sections/products'
import Features from '@/sections/features'
import Info from '@/sections/info'
import Awards from '@/sections/awards'
import FAQs from '@/sections/faq'

const Main: React.FC = () => {
  return (
    <main className={styles.main_container}>
        <Hero />
        <About />
        <Products />
        <Features />
        <Info />
        <Awards />
        <FAQs />
    </main>
  )
}

export default Main