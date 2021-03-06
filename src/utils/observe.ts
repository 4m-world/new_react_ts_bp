import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { usePreviousDistinct } from 'react-use';

export const useWindowFocus = () => {
  const [focused, setFocused] = useState(true);

  useEffect(() => {
    function onFocus() {
      setFocused([undefined, 'visible', 'prerender'].includes(document.visibilityState));
    }

    window.addEventListener('visibilitychange', onFocus, false);
    window.addEventListener('focus', onFocus, false);

    return () => {
      window.removeEventListener('visibilitychange', onFocus);
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  return focused;
};

// Debounce handler in case the user eg. changes tabs quickly
const windowFocusEffectHandler = debounce(cb => cb && cb(), 5000, {
  leading: true,
  trailing: false,
});

export const useWindowFocusEffect = (cb: () => any) => {
  const focused = useWindowFocus();
  const prevFocused = usePreviousDistinct(focused);

  useEffect(() => {
    if (prevFocused === undefined) return;
    if (focused && !prevFocused) windowFocusEffectHandler(cb);
  }, [focused, prevFocused, cb]);
};
