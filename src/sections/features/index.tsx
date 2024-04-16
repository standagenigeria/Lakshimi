import React from 'react'
import Container from '@/components/container'
import Stacks from '@/components/stacks'
import SectionText from '@/components/section-text'

// assets
import product1 from '@/assets/images/product1.png'
import product2 from '@/assets/images/product2.png'

const Features: React.FC = () => {
  return (
    <Container colorScheme={2} id="features">
        <SectionText 
            header='Product Features'
            subText='Discover the Essence of Our Tea Collection'
        />

        <Stacks 
            img1={product1}
            h1='Honey that took over 2 years to find.'
            p1={
                `Discover the liquid gold that embodies patience and persistence – our honey took over 
                2 years to find. We have tried over a 1000 different types of honey of different locations 
                and finally, after 2 years of extensive search and going all the way from Japan to Spain, 
                we discovered the perfect honey for the perfect flavored blend of tea.`
            }
            btn1='Buy Now'
            img2={product2}
            h2='Blended by Japanese tea sommelier Yoko Toda.'
            p2={
                `Crafted with precision and expertise, each blend bears the mark of Japanese tea sommelier Yoko Toda. 
                Immerse yourself in the artistry of tea, perfected by a master for an unparalleled experience in every sip.`
            }
            btn2='Buy Now'
        />
    </Container>
  )
}

export default Features