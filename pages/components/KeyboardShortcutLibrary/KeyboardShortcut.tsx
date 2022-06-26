import { useEffect, memo } from 'react';

import { keypressJsListener } from './keypressSingletonListener';
import { KeyboardShortcutStore } from './keyboardShortcut.store';

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
  const { setActiveKeyboardShortcutList } = KeyboardShortcutStore();

  // the context maintaining all the active keys
  // should be only modified when the combo, description changes
  // setActiveKeyboardShortcutList is optional and will never change
  useEffect(() => {
    if (setActiveKeyboardShortcutList) {
      setActiveKeyboardShortcutList((activeKeyboardShortcutList) => [
        ...activeKeyboardShortcutList,
        [combo, description],
      ]);
    }

    return () => {
      if (setActiveKeyboardShortcutList) {
        setActiveKeyboardShortcutList((activeKeyboardShortcutList) => {
          const shortcutList = [...activeKeyboardShortcutList];
          for (let i = 0; i < shortcutList.length; i++) {
            const [inListCombo, inListDescription] = shortcutList[i];
            if (inListCombo === combo && inListDescription === description) {
              shortcutList.splice(i, 1);
              break;
            }
          }
          return shortcutList;
        });
      }
    };
  }, [combo, description, setActiveKeyboardShortcutList]);

  // register/deregister in keypress.js is only based on combo and callback
  useEffect(() => {
    keypressJsListener.register(combo, callback);
    return () => {
      keypressJsListener.deregister(combo, callback);
    };
  }, [combo, callback]);

  return null;
};

export default memo(KeyboardShortcut);
