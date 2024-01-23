import React from 'react';
import { useThemeContext } from '@Contexts/Theme';
import { useGlobalContext } from '@Contexts/Global';

export const Logo: React.FC = () => {
  const { primaryColor } = useThemeContext();
  const { appName } = useGlobalContext();

  const logoStyle: React.CSSProperties = {
    fontFamily: 'Poppins',
    fontSize: '48px',
    fontWeight: '800',
    lineHeight: 'normal',
    fontStyle: 'normal',
    color: primaryColor,
  };

  return <h1 style={logoStyle}>{appName}</h1>;
};
