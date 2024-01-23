import React, { useMemo } from 'react';

export type GlobalContextProps = {
  appName?: string;
  primaryColor?: string;
};

export const GlobalContext = React.createContext<GlobalContextProps>({
  appName: 'TidyParty',
  primaryColor: '#3045A2',
});

export const GlobalContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children,
}) => {
  const [appName, setAppName] = React.useState<string | undefined>(undefined);
  const [primaryColor, setPrimaryColor] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    setAppName('TidyParty');
    setPrimaryColor('#3045A2');
  }, []);

  const values = useMemo(() => ({
    appName,
    primaryColor,
  }), [appName, primaryColor]);

  return (
    <GlobalContext.Provider
      value={values}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
