import React from 'react'
import styles from './index.module.css'
import Container from '@/components/container'
import Button from '@/components/button'

// assets
import honeyTee from '@/assets/images/honey_tee.png'
import honeyLemon from '@/assets/images/honey_lemon_tea.png'
import SectionText from '@/components/section-text'

const Products: React.FC = () => {
  return (
    <Container colorScheme={2} id="products">
        <SectionText 
            header='Selected Products'
            subText='Indulge in Our Exceptional Tea Collection.'
            center
        />
        
        <article className={styles.products_section}>
            <div className={styles.products}>
                <img src={honeyTee} alt='' />

                <h4>Premium Honey Tea</h4>

                <p>
                    As a product delivered by a tea sommelier from a tea specialty shop, 
                    we have maximized the flavor of the tea leaves. We blend powdered multi-floral 
                    honey from Spain into the tea. The sweetness of the honey is so strong that there 
                    is no need to use sugar. Just one sip brings a feeling of happiness, a rich flavor. 
                    It’s a delicious tea, whether hot or iced, straight or as a milk tea.
                </p>

                <Button content='Buy Now' />
            </div>

            <div className={styles.products}>
                <img src={honeyLemon} alt='' />

                <h4>Premium Honey Lemon Tea</h4>

                <p>
                    Indulge in the harmonious blend of nature's finest ingredients with Lakshimi Premium 
                    Honey Lemon Tea. Crafted with meticulous care, this exquisite infusion combines the 
                    sweetness of pure honey, the zest of sun-kissed lemons, and the premium quality tea 
                    leaves to create a tea experience like no other. Elevate your tea ritual with Lakshimi 
                    Premium Honey Lemon Tea, where every sip is a celebration of taste and tranquility.
                </p>

                <Button content='Buy Now' />
            </div>
        </article>
    </Container>
  )
}

export default Products