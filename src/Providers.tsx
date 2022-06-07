import type { ReactNode } from 'react';
import { OverlayProvider } from 'react-aria';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeingProvider } from '~services/theming';
import { AuthProvider } from '~services/auth';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeingProvider>
      <AuthProvider>
        <OverlayProvider>
          <Router>{children}</Router>
        </OverlayProvider>
      </AuthProvider>
    </ThemeingProvider>
  );
};

export default Providers;
