import React from 'react';

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Card: React.FC<CardProps> = ({
  children,
  style,
}) => (
  <div style={{
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    background: 'rgba(238, 238, 242, 0.45)',
    ...style,
  }}
  >
    {children}
  </div>
);
