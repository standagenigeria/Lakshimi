import React from 'react';

interface ButtonProps {
  content: string,
  onClick?: any
}

const Button: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <button 
      onClick={onClick}
    >
      {content}
    </button>
  )
}

export default Button