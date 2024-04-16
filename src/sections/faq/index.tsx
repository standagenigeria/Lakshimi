import Container from '@/components/container'
import SectionText from '@/components/section-text'
import React from 'react'
import styles from './index.module.css'
import Button from '@/components/button'

const faqData = [
    { number: '01', question: 'Can children drink it?', answer: 'No. Do not give to children under 1 year old.' },
    { number: '02', question: 'Are there staples attached to the tea bag?', answer: 'There are no staples nor any metals attached. So, please drink it with peace of mind.' },
    { number: '03', question: 'Is there an expiration date?', answer: 'The expiration date is 2 years after the date of manufacture.' }
]

const FAQs: React.FC = () => {
  return (
    <Container colorScheme={1} id='faq'>
        <SectionText 
            header='Frequently Asked Questions'
            subText={`
                Dive into the details! Here are answers to some commonly asked questions. If you don't 
                find what you're looking for, feel free to reach out to us – we're here to help!
                `
            }
            center
        />

        <section className={styles.faqs_container}>
            <article>
                {faqData.map((item)=>(
                    <React.Fragment key={item.number}>
                        <div className={styles.faq}>
                            <div className={styles.number}>{item.number}</div>

                            <div className={styles.faq_texts}>
                                <div>{item.question}</div>
                                <div>{item.answer}</div>
                            </div>
                        </div>
                        
                        {item.number !== '03' && <hr />}
                    </React.Fragment>
                ))}
            </article>

            <Button content='Buy Now' />
        </section>
    </Container>
  )
}

export default FAQs