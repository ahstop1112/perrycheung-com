'use client';

import { createContext, useContext } from 'react';

type GeoContextType = {
  country: string;
};

const GeoContext = createContext<GeoContextType>({
  country: '',
});

export const GeoProvider = ({
  country,
  children,
}: {
  country: string;
  children: React.ReactNode;
}) => (
  <GeoContext.Provider value={{ country }}>
    {children}
  </GeoContext.Provider>
);

export const useGeo = () => {
  const { country } = useContext(GeoContext);

  return {
    country,
    isHK: country === 'HK',
  };
};