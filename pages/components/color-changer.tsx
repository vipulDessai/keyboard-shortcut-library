import { useState } from 'react';
import styles from '../../styles/Home.module.scss';

import KeyboardShortcut from './KeyboardShortcutLibrary/KeyboardShortcut';

interface ColorChangerType {
  name: string;
  combo: string;
  description: string;
  colors: string[];
}

export default function ColorChanger({
  name,
  combo,
  description,
  colors,
}: ColorChangerType) {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const turnColors = () => {
    const c = currentColor === colors[0] ? colors[1] : colors[0];
    setCurrentColor(c);
  };

  return (
    <>
      <KeyboardShortcut
        combo={combo}
        description={description}
        callback={turnColors}
      />
      <div
        className={styles['color-changer']}
        style={{ backgroundColor: currentColor }}>
        {name}
      </div>
    </>
  );
}
