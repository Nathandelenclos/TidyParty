import React, { useMemo } from 'react';

export type ThemeContextProps = {
  primaryColor?: string;
};

export const ThemeContext = React.createContext<ThemeContextProps>({
  primaryColor: '#3045A2',
});

export const ThemeContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children,
}) => {
  const [primaryColor, setPrimaryColor] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setPrimaryColor('#3045A2');
  }, []);

  const values = useMemo(() => ({
    primaryColor,
  }), [primaryColor]);

  return (
    <ThemeContext.Provider
      value={values}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
