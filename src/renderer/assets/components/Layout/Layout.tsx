import React, { FC } from 'react';
import styles from './Layout.module.scss';
import themes from '../../styles/Themes.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface props {
  children?: React.ReactNode;
  title?: string;
}

const Layout: FC<props> = ({ children, title }) => {
  return (
    <div className={`${styles.layout} ${themes.dark}`}>
      <Header title={title} />

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
