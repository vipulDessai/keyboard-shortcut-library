import type { NextPage } from 'next';
import Head from 'next/head';

// custom plugin
import { KeyboardShortcutStoreProvider } from '../plugin/KeyboardShortcutLibrary/keyboardShortcut.store';

import styles from '../styles/Home.module.scss';

import ColorChanger from '../components/color-changer';
import Help from '../components/help';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colors</title>
      </Head>

      <main className={styles.main}>
        <KeyboardShortcutStoreProvider>
          <ColorChanger
            name="A"
            combo="shift s"
            description="green"
            colors={['#C06C84', '#355C7D']}
          />
          <ColorChanger
            name="B"
            combo="shift a"
            description="yellow"
            colors={['#A8E6CE', '#FF8C94']}
          />
          <ColorChanger
            name="C"
            combo="shift w"
            description="pink"
            colors={['#CC527A', '#363636']}
          />
          <ColorChanger
            name="D"
            combo="shift s"
            description="grey"
            colors={['#2F9599', '#F9D423']}
          />
          <Help></Help>
        </KeyboardShortcutStoreProvider>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
