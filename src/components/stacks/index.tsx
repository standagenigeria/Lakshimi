import React from 'react'
import styles from './index.module.css'
import Button from '../button'

interface StacksProps {
    img1: string,
    h1: string,
    p1: string,
    btn1: string,
    img2: string,
    h2: string,
    p2: string,
    btn2: string,
}

const Stacks: React.FC<StacksProps> = ({ img1, h1, p1, btn1, img2, h2, p2, btn2 }) => {
  return (
    <article className={styles.stacks_section}>
        <div className={styles.stacks}>
            <img src={img1} alt='' />
                
            <div>
                <h4>{h1}</h4>

                <p>{p1}</p>

                <Button content={btn1} />
            </div>
        </div>
            
        <div className={`${styles.stacks} ${styles.flex_col}`}>
            <div>
                <h4>{h2}</h4>

                <p>{p2}</p>

                <Button content={btn2} />
            </div>

            <img src={img2} alt='' />
        </div>
    </article>
  )
}

export default Stacks