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

  useEffect(() => {
    keypressJsListener.register(combo, description, callback);

    if (setActiveKeyboardShortcutList) {
      setActiveKeyboardShortcutList((activeKeyboardShortcutList) => [
        ...activeKeyboardShortcutList,
        [combo, description],
      ]);
    }

    return () => {
      keypressJsListener.deregister(combo, callback);

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
  }, []);

  return null;
};

export default memo(KeyboardShortcut);
