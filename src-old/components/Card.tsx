import React, { useState } from 'react';

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  onClick: (num: number) => void;
}

const Card: React.FC<CardProps> = ({width, height, children, onClick}) => {
  const [a, setA] = useState(0);
  return (
    <div 
      style={{width, height, backgroundColor: 'gray'}}
      onClick={() => onClick(a)}>
      {children}
    </div>
  );
};

export default Card;