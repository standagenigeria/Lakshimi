import React from 'react';

interface ButtonProps {
  content: string,
  onClick?: any
}

const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <a 
      target='_blank'
      className='button'
      href="https://linktr.ee/lakshimi_international?utm_source=linktree_profile_share&ltsid=c77d6802-7277-4129-9f87-15047b4ca409"
      onClick={onClick}
    >
      {content}
    </a>
  )
}

export default Button