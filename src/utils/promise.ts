import loadable from '@loadable/component';

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Based on suggestion here: https://loadable-components.com/docs/delay/
export const minDelayPromise = async (promise: Promise<any>, minimumDelay: number) =>
  await Promise.all([promise, sleep(minimumDelay)]);

export const loadableWithFallback = <T>(
  importer: () => Promise<any>,
  fallback: JSX.Element,
  delay?: number
) => loadable<T>(() => (delay ? minDelayPromise(importer(), delay) : importer()), { fallback });
