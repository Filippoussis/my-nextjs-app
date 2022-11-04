import { FC, ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}>Header</Header>
      <Sidebar className={styles.sidebar}>Sidebar</Sidebar>
      <main className={styles.content}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
