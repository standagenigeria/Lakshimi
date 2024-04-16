import React from 'react'
import styles from './index.module.css'

interface ContainerProps {
    children: React.ReactNode;
    colorScheme: 1 | 2,
    id?: string
}

const Container = ({ children, colorScheme, id }: ContainerProps) => {
  return (
    <section
        style={{
            backgroundColor: colorScheme === 1 ? 'var(--whiteHex)' : 'var(--subBGHex)'
        }}
        className={styles.wrapper}
        id={id}
    >
        <div className={styles.container}>
            {children}
        </div>
    </section>
  )
}

export default Container