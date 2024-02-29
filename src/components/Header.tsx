import Link from 'next/link';
import NavBar from '@components/NavBar';
import styles from '@styles/Header.module.css';

/**
 * It returns a header element with a logo, a title, and a navigation bar
 * @returns A JSX element
 */
function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <div className="h-16">
          <Link href="/">
            {/* Logo ? */}
          </Link>
        </div>
      </div>
      <div className={styles.name}>
        <Link href="/">Campus Quest</Link>
      </div>
      <div className={styles.small}>
        <div className={styles.smallB}>
          <Link href="/">
            {/* Logo ? */}
          </Link>
        </div>
      </div>
      {/* NAVIGATION BAR */}
      <NavBar />
    </header>
  );
}

export default Header;
