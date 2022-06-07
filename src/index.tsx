import './index.css';

import { createRoot } from 'react-dom/client';
import App from './App';
import Providers from './Providers';
// import * as serviceWorker from './serviceWorker';
// import { setupErrorReporting } from '~services/reporting';

async function init() {
  // setupErrorReporting();

  const container = document.getElementById('root');

  if (!container) throw new Error('Failed to find the root element');

  const root = createRoot(container);

  root.render(
    <Providers>
      <App />
    </Providers>
  );
}

init();

// NOTE: Service Worker is enabled only in production builds
// NOTE: check `serviceWorker.ts` if you want to use automatic app update propmt
// TODO: register service worker if needed
// serviceWorker.register();
// serviceWorker.unregister();
