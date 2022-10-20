import React from 'react';
import styles from './Layout.module.scss';
import themes from '../../styles/Themes.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className={`${styles.layout} ${themes.dark}`}>
      <Header />

      <main></main>

      <Footer />
    </div>
  );
};

export default Layout;
