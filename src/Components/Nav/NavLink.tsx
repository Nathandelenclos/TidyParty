import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '@Contexts/Theme';

type LinkNavProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export const NavLink: React.FC<LinkNavProps> = ({
  href,
  children,
  active,
  onClick,
}) => {
  const { primaryColor } = useThemeContext();

  return (
    <div style={{
      padding: '0 5px',
      borderBottom: active ? `2px solid ${primaryColor}` : 'none',
    }}
    >
      <Link
        to={href}
        style={{
          textDecoration: 'none',
          color: primaryColor,
        }}
        onClick={onClick}
      >
        {children}
      </Link>
    </div>
  );
};
