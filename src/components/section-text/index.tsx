import React from 'react'
import styles from './index.module.css'
interface SectionTextProps {
  header: string,
  center?: boolean,
  subText?: string
}

const SectionText: React.FC<SectionTextProps> = ({ header, subText, center }) => {
  return (
    <div 
      className={styles.section_text}
      style={{ textAlign: center ? 'center' : undefined }}
    >
      <h3>{header}</h3>
      <p>{subText}</p>
    </div>
  )
}

export default SectionText