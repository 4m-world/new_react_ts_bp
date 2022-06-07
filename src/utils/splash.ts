import { sleep } from './promise';

const SPLASH_SCREEN_ID = 'splash-screen';
const SPLASH_ANIMATION_DURATION = 200;

export const hideSplashScreen = async () => {
  console.log('> hide splash');
  const splashScreen = document.getElementById(SPLASH_SCREEN_ID);

  if (!splashScreen) return;

  splashScreen.classList.add('splash-screen-hidden');

  await sleep(SPLASH_ANIMATION_DURATION + 10);
  splashScreen.style.display = 'none';
};
