import React from 'react';
import { useThemeContext } from '@Contexts/Theme';

type UserCardProps = {
  children: React.ReactNode;
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  selected?: boolean;
};

export const UserCard: React.FC<UserCardProps> = ({
  children,
  style,
  alt,
  src,
  selected,
  onClick,
}) => {
  const { primaryColor } = useThemeContext();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      style={{
        margin: '10px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        borderRadius: '15px',
        maxWidth: '200px',
        minWidth: '200px',
        transition: 'ease-in-out 0.1s',
        border: selected ? `2px solid ${primaryColor}` : 'none',
        ...style,
        overflow: 'hidden',
        position: 'relative',
      }}
      onClick={onClick}
    >
      <img
        src={src}
        alt={`${alt || 'User Card'}`}
        style={{
          width: '100%',
        }}
      />
      <div className="container">
        {children}
      </div>
    </div>
  );
};
