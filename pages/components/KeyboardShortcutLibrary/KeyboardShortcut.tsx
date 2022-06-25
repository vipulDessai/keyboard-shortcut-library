import { useEffect, memo } from 'react';

import { keypressJsListener } from './keypressSingletonListener';

interface KeyboardShortcutType {
  combo: string;
  callback: () => void;
  description: string;
}

const KeyboardShortcut = ({
  combo,
  callback,
  description,
}: KeyboardShortcutType) => {
  useEffect(() => {
    keypressJsListener.register(combo, callback);
    return () => {
      keypressJsListener.deregister(combo, callback);
    };
  }, []);

  return null;
};

const propsAreEqual = (
  prevProps: Readonly<KeyboardShortcutType>,
  nextProps: Readonly<KeyboardShortcutType>,
): boolean => {
  const foo = 'bar';

  return true;
};

export default memo(KeyboardShortcut, propsAreEqual);
