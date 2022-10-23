import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const ipc = window.electron.ipcRenderer;

  return (
    <header className={styles.appHeader}>
      <div className={styles.buttonGrid}>
        <svg
          width='14'
          height='3'
          viewBox='0 0 14 3'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            // @ts-ignore
            ipc.sendMessage('controls-minimize', []);
          }}
        >
          <rect width='13.9096' height='2.31827' rx='1.15913' fill='#898989' />
        </svg>

        <svg
          width='12'
          height='12'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            // @ts-ignore
            ipc.sendMessage('controls-close', []);
          }}
        >
          <rect
            x='3.05176e-05'
            y='9.8356'
            width='13.9096'
            height='2.31827'
            rx='1.15913'
            transform='rotate(-45 3.05176e-05 9.8356)'
            fill='#898989'
          />
          <rect
            x='1.63927'
            width='13.9096'
            height='2.31827'
            rx='1.15913'
            transform='rotate(45 1.63927 0)'
            fill='#898989'
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
