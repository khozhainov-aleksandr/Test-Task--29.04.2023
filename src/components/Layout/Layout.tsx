import TopMenu from "../TopMenu/TopMenu";
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu';
import styles from './Layout.module.css';

export const Layout = ({ children }: any) => (
  <>
    <header className={styles.header}>
      <TopMenu />
      <NavigationMenu />
    </header>
    {children}
  </>
);
