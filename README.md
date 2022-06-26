This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## KeyboardShortcut component usage
```tsx
// import the KeyboardShortcut
import KeyboardShortcut from './components/KeyboardShortcutLibrary/KeyboardShortcut';

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

## derive list of active keys
- to set and get all the combos and descriptions, wrap the `KeyboardShortcut` with `KeyboardShortcutStoreProvider`
```tsx
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

- to get the list in a component declared in the context (ex. Help)
```tsx
import { KeyboardShortcutStore } from './KeyboardShortcutLibrary/keyboardShortcut.store';

function Help() {
  const { activeKeyboardShortcutList } = KeyboardShortcutStore();

  return <p>{`this is help ${activeKeyboardShortcutList}`}</p>;
}

export default Help;
```