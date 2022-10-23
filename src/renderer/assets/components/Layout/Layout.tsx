import React, { FC } from 'react';
import styles from './Layout.module.scss';
import themes from '../../styles/Themes.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface props {
  children?: React.ReactNode;
}

const Layout: FC<props> = ({ children }) => {
  return (
    <div className={`${styles.layout} ${themes.dark}`}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
