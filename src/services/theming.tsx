import { createContext, ReactNode, useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { usePersistedState } from '~utils/persistance';

type CurrentTheme = 'light' | 'dark';

type AuthContextValue = {
  currentTheme: CurrentTheme;
  setCurrentTheme: (t: CurrentTheme) => void;
  toggleTheme: () => void;
};

const ThemeingContext = createContext<undefined | AuthContextValue>(undefined);

export const ThemeingProvider = ({ children }: { children: ReactNode }) => {
  const [persistedTheme, setCurrentTheme] = usePersistedState('@app/theme');
  const currentTheme = persistedTheme || (window as any).CURRENT_THEME || 'light';
  const theme = currentTheme === 'light' ? '' : 'wfp--theme-dark';

  function toggleTheme() {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    if (currentTheme === 'dark') {
      document.body.classList.add('wfp--theme-dark');
    } else {
      document.body.classList.remove('wfp--theme-dark');
    }
  }, [currentTheme]);

  return (
    <ThemeingContext.Provider value={{ currentTheme, setCurrentTheme, toggleTheme }}>
      {children}
    </ThemeingContext.Provider>
  );
};

export const useTheming = () => {
  const context = useContext(ThemeingContext);
  if (!context) throw new Error('Missing ThemingProvider');

  return context;
};
