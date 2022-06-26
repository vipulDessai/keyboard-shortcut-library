import { KeyboardShortcutStore } from './KeyboardShortcutLibrary/keyboardShortcut.store';

function Help() {
  const { activeKeyboardShortcutList } = KeyboardShortcutStore();

  return (
    <section>
      <p>{`The list of all the keyboard shortcuts`}</p>
      <ul>
        {activeKeyboardShortcutList.map((keyboardShortcut, index) => (
          <li
            key={
              index
            }>{`"${keyboardShortcut[0]}" : "${keyboardShortcut[1]}"`}</li>
        ))}
      </ul>
    </section>
  );
}

export default Help;
