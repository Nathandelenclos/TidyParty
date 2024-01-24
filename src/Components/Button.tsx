import React from 'react';
import { useThemeContext } from '@Contexts/Theme';

export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

export enum ButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
}

type ButtonProps = {
  children: React.ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  onClick?: () => void;
  style?: React.CSSProperties;
};

const resetButtonStyles: React.CSSProperties = {
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type = ButtonType.PRIMARY,
  size = ButtonSize.MEDIUM,
  onClick,
  style,
}) => {
  const { primaryColor } = useThemeContext();

  const styles = {
    [ButtonType.PRIMARY]: {
      color: '#fff',
      backgroundColor: primaryColor,
    },
    [ButtonType.SECONDARY]: {
      color: primaryColor,
      backgroundColor: 'rgba(238, 238, 242, 0.42)',
    },
  };

  const sizeStyles = {
    [ButtonSize.SMALL]: {
      fontSize: '12px',
      padding: '5px 10px',
    },
    [ButtonSize.MEDIUM]: {
      fontSize: '16px',
      padding: '10px 20px',
    },
    [ButtonSize.LARGE]: {
      fontSize: '20px',
      padding: '15px 30px',
    },
  };

  return (
    <button
      type="submit"
      style={{
        borderRadius: '10px',
        ...resetButtonStyles,
        ...styles[type],
        ...sizeStyles[size],
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
