import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  style,
}) => (
  <div style={{
    margin: '10px 10%',
    ...style,
  }}
  >
    {children}
  </div>
);
