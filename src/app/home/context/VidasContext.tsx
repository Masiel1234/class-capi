import { createContext, useContext, useState } from 'react';

interface VidasContextType {
  vidas: number;
  perderVida: () => void;
  reiniciarVidas: () => void;
}

const VidasContext = createContext<VidasContextType | undefined>(undefined);

export const VidasProvider = ({ children }: { children: React.ReactNode }) => {
  const [vidas, setVidas] = useState(3);
  const perderVida = () => setVidas((prev) => Math.max(prev - 1, 0));
  const reiniciarVidas = () => setVidas(3);

  return (
    <VidasContext.Provider value={{ vidas, perderVida, reiniciarVidas }}>
      {children}
    </VidasContext.Provider>
  );
};

export const useVidas = () => {
  const context = useContext(VidasContext);
  if (!context) throw new Error('useVidas debe usarse dentro de VidasProvider');
  return context;
};
