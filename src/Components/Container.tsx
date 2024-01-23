import React from 'react';

export const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{
    margin: '10px 10%',
  }}
  >
    {children}
  </div>
);
