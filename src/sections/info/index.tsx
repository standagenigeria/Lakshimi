import Container from '@/components/container'
import SectionText from '@/components/section-text'
import Stacks from '@/components/stacks'
import React from 'react'

// assets
import product1 from '@/assets/images/milk.png'
import product2 from '@/assets/images/ice.png'

const Info: React.FC = () => {
  return (
    <Container colorScheme={1}>
        <SectionText 
            header='Get the best from our Tea'
            subText='Style to your own taste.'
            center
        />

        <Stacks 
            img1={product1}
            h1='With Milk'
            p1={
                `Savor the perfect union of tradition and comfort by enjoying our tea with milk. Elevate your 
                tea-drinking experience as the rich, robust flavors intertwine with the creamy embrace of milk, 
                creating a symphony of taste that lingers in every delightful sip.`
            }
            btn1='Buy Now'
            img2={product2}
            h2='With Ice'
            p2={
                `Embrace the refreshing symphony of flavors as you take a cool journey through our teas enjoyed with ice. 
                Immerse yourself in the invigorating fusion of iced tea, where each sip unfolds a delightful dance of chilled 
                sophistication and exceptional taste.`
            }
            btn2='Buy Now'
        />
    </Container>
  )
}

export default Info