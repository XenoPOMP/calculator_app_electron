import React from 'react';
import styles from './Header.module.scss';
import { CloseOutline } from 'react-ionicons';

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <div
        className={styles.placeholder}
        onClick={() => {
          window.electron.ipcRenderer.sendMessage('controls-close', []);
        }}
      >
        <CloseOutline height='22px' width='22px' />
      </div>
    </header>
  );
};

export default Header;
