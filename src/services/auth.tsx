import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { hideSplashScreen } from '~utils/splash';
import { sleep } from '~utils/promise';

import storage from '~utils/storage';

type AuthStatus =
  | 'undetermined'
  | 'determining'
  | 'logged-in'
  | 'logged-out'
  | 'authenticated'
  | 'unauthenticated';

type AuthContextValue = {
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
  status: AuthStatus;
};

const AuthContext = createContext<undefined | AuthContextValue>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState<AuthStatus>('undetermined');

  const login = async (credentials: { email: string; password: string }) => {
    try {
      setStatus('logged-in');

      const tokens = await fakeLogin(credentials);
      if (!tokens) throw Error('Access token missing!');

      storage.clearAll();
      storage.set('@app/tokens', tokens);
      setStatus('authenticated');
    } catch (error) {
      console.log('> Failed to login', error);
      setStatus('unauthenticated');
    }
  };

  const logout = async () => {
    try {
      setStatus('logged-out');
      await fakeLogout();
    } catch (error) {
      console.log('> Failed to logout', error);
    } finally {
      // Logout the user even if the network call failed
      setStatus('unauthenticated');
      storage.clearAll();
    }
  };

  async function checkAuth() {
    setStatus('determining');
    console.log('FU');
    try {
      const tokens = storage.get('@app/tokens');

      if (tokens.accessToken) {
        await fakeTestTokens(); // Test if tokens are still valid
        setStatus('authenticated');
      } else {
        await logout();
      }
    } catch (error) {
      setStatus('unauthenticated');
    } finally {
      hideSplashScreen();
    }
  }

  return (
    <AuthContext.Provider value={{ checkAuth, status, login, logout }}>
      <>{children}</>
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Missing AuthProvider!');

  return context;
};

export const useAuthCheck = () => {
  const { checkAuth, status } = useAuth();

  useEffect(() => {
    console.log('FSA');
    if (status === 'undetermined') {
      (async () => {
        await checkAuth();
      })();
    }
  }, []); // eslint-disable-line

  return status;
};

// TEMP FUNCTION

const fakeLogin = async ({ email, password }: { email: string; password: string }) => {
  console.log('> Doing fake login...', email, password);
  await sleep(2000);
  return {
    accessToken: 'mepd-access-token',
    refreshToken: 'mepd-refresh-token',
  };
};

async function fakeLogout() {
  console.log('> Doing fake logout...');
  await sleep(2000);
}

async function fakeTestTokens() {
  await sleep(1000);
}
