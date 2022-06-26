import { createContext, useContext, useState } from 'react';

const Store = createContext({});
Store.displayName = 'keyboard-shortcut-store';

type activeKeyboardShortcutsType = [string, string];

export const KeyboardShortcutStore = () =>
  useContext(Store) as {
    activeKeyboardShortcutList: activeKeyboardShortcutsType[];
    setActiveKeyboardShortcutList: React.Dispatch<
      React.SetStateAction<activeKeyboardShortcutsType[]>
    >;
  };

interface KeyboardShortcutStoreProviderType {
  children: React.ReactNode;
}

export function KeyboardShortcutStoreProvider({
  children,
}: KeyboardShortcutStoreProviderType) {
  const [activeKeyboardShortcutList, setActiveKeyboardShortcutList] = useState(
    [],
  );
  return (
    <Store.Provider
      value={{ activeKeyboardShortcutList, setActiveKeyboardShortcutList }}>
      {children}
    </Store.Provider>
  );
}
