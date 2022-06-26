This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
# or
yarn install

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Or you can visit the [live link](https://keyboard-shortcut-library.vercel.app/).

## KeyboardShortcut component usage
```tsx
// import the KeyboardShortcut
import KeyboardShortcut from '../plugin/KeyboardShortcutLibrary/KeyboardShortcut';

// and in the render part of the function, 
// provide 3 arguments 
// 1. combo of type string
// 2. description of type string
// 3. callback of type function
<KeyboardShortcut
  combo="shift s"
  description="green"
  callback={turnGreen}
/>
```

## Derive list of active keys
To set and get all the combos and descriptions, wrap the `KeyboardShortcut` with `KeyboardShortcutStoreProvider`
```tsx
// import custom plugin 
import { KeyboardShortcutStoreProvider } from '../plugin/KeyboardShortcutLibrary/keyboardShortcut.store';

import Help from '../components/help';

<KeyboardShortcutStoreProvider>
  <KeyboardShortcut
    combo="shift s"
    description="green"
    callback={turnGreen}
  />
  <KeyboardShortcut
    combo="shift s"
    description="grey"
    callback={turnGrey}
  />
  <Help></Help>
</KeyboardShortcutStoreProvider>
```

To get the list of active key combs in any component declared within the `KeyboardShortcutStoreProvider` context (ex. Help component)
```tsx
import { KeyboardShortcutStore } from './KeyboardShortcutLibrary/keyboardShortcut.store';

function Help() {
  const { activeKeyboardShortcutList } = KeyboardShortcutStore();

  return <p>{`this is help ${activeKeyboardShortcutList}`}</p>;
}

export default Help;
```