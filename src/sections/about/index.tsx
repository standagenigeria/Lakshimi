import React from 'react'
import Container from '@/components/container'
import Button from '@/components/button'
import styles from './index.module.css'

// assets
import lakshimi from "@/assets/images/lakshimi.svg";

const About: React.FC = () => {
  return (
    <Container colorScheme={1} id="about">
        <article className={styles.about_section}>
            <div>
                <h2>About Brand</h2>

                <div>
                    <p>
                        Lakshimi started with a tea class that the representative, Yoko Toda, started at home. 
                        In 2005, “Lakshimi Tea Shop” opened in Kitano, Kobe.
                    </p>
                    
                    <p>
                        In 2008, we started to blend our own original tea. Initially, we started with only a few 
                        blends, but as we learned about the tastes and preferences of our customers, we gradually 
                        increased the number of original blends.
                    </p>

                    <p>
                        In 2011, we developed our popular product, “Premium Honey Tea”. This tea was well-received 
                        by customers who enjoyed its sweet yet low-calorie content, making it a mainstay in our store.
                    </p>
                </div>

                <Button 
                    content='Buy Now'
                />
            </div>

            <img src={lakshimi} alt='' />
        </article>
    </Container>
  )
}

export default About