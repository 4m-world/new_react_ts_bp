type APP_ENV =
  | 'local'
  | 'feat'
  | 'dev'
  | 'test'
  | 'uat'
  | 'qa'
  | 'stage'
  | 'canary'
  | 'cana'
  | 'prod';

const envs = ['localhost', 'feat', 'dev', 'test', 'uat', 'qa', 'stag', 'canary', 'cana', 'prod'];

const subdomainSplit = window.location.hostname.split('.')[0].split('-');
const envSuffix = subdomainSplit[subdomainSplit.length - 1];
const currentEnv = envs.includes(envSuffix) ? envSuffix : 'prod';

const config = {
  ENV: currentEnv as APP_ENV,
  IS_DEV: process.env.NODE_ENV !== 'production',
  SENTRY_PUBLIC_DSN: process.env.SENTRY_PUBLIC_DSN as string,
  ERROR_REPORTING_ENABLED:
    currentEnv === 'prod' &&
    process.env.NODE_ENV === 'production' &&
    !!process.env.SENTRY_PUBLIC_DSN &&
    process.env.SENTRY_PUBLIC_DSN.startsWith('https'),
};

export default config;
