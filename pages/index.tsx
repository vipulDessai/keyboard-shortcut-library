import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';

import styles from '../styles/Home.module.scss';
import Help from './components/help';

import KeyboardShortcut from './components/KeyboardShortcutLibrary/KeyboardShortcut';
import { KeyboardShortcutStoreProvider } from './components/KeyboardShortcutLibrary/keyboardShortcut.store';

const Home: NextPage = () => {
  const turnGreen = () => {
    console.log("i'm green");
  };
  const turnYellow = () => {
    console.log("i'm yellow");
  };
  const turnPink = () => {
    console.log("i'm pink");
  };
  const turnGrey = () => {
    console.log("i'm Grey");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Colors</title>
      </Head>
      <main className={styles.main}>
        <KeyboardShortcutStoreProvider>
          <KeyboardShortcut
            combo="shift s"
            description="green"
            callback={turnGreen}
          />
          <KeyboardShortcut
            combo="shift a"
            description="yellow"
            callback={turnYellow}
          />
          <KeyboardShortcut
            combo="shift w"
            description="pink"
            callback={turnPink}
          />
          <KeyboardShortcut
            combo="shift s"
            description="grey"
            callback={turnGrey}
          />
          <Help></Help>
        </KeyboardShortcutStoreProvider>
      </main>

      <footer className={styles.footer}>
        <Script
          src="https://cdn.jsdelivr.net/gh/dmauro/Keypress@master/keypress.js"
          strategy="beforeInteractive"></Script>
      </footer>
    </div>
  );
};

export default Home;
