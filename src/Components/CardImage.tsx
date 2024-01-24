import React from 'react';
import json from '@Root/package.json';

type CardImageProps = {
  children: React.ReactNode;
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
};

export const CardImage: React.FC<CardImageProps> = (
  {
    children,
    style,
    src,
    alt,
  },
) => (
  <div style={{
    width: '100%',
    minWidth: '300px',
    minHeight: '200px',
    maxHeight: '400px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'rgba(238, 238, 242, 0.45)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '15px',
    position: 'relative',
    overflow: 'hidden',
    ...style,
  }}
  >
    <img
      src={src || `/${json.homepage}/assets/lieu.jpeg`}
      alt={alt || 'Card Image'}
      style={{
        width: '50%',
        height: '100%',
        minHeight: '200px',
        maxHeight: '400px',
        overflow: 'hidden',
        objectFit: 'fill',
        objectPosition: 'center',
      }}
    />
    <div style={{
      width: '50%',
      height: '100%',
    }}
    >
      {children}
    </div>
  </div>
);
