import Container from '@/components/container'
import SectionText from '@/components/section-text'
import React from 'react'
import Button from '@/components/button'
import styles from './index.module.css'

// assets
import award1 from '@/assets/images/recognition1.png'
import award2 from '@/assets/images/recognition2.png'

const Awards: React.FC = () => {
  return (
    <Container colorScheme={2} id='awards'>
        <SectionText 
            header='Awards & Recognition'
            subText='Our work speaks for us.'
        />

        <article className={styles.awards_section}>
            <div>
                <img src={award1} alt='' />
                <p>Top sales in tea category in Japanese EC site.</p>
                <Button content='Buy Now' />
            </div>

            <div>
                <img src={award2} alt='' />
                <p>Top sales in tea category in department stores.</p>
                <Button content='Buy Now' />
            </div>
        </article>
    </Container>
  )
}

export default Awards