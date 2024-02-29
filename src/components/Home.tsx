import Link from 'next/link';
import styles from '@styles/Home.module.css';

function Home(): JSX.Element {

  return (
    <div className={styles.containers}>
      <h1 className={styles.heading}>(Re)Découvrez MDS Caen avec Campus Quest !</h1>
      <br />
      <h2 className={styles.content}>
        Trouvez tous les QRCode pour être le plus fier des Ménestrels !
      </h2>
      <br />
      <div className="mt-10">
        <Link href="/scanner" className={`group ${styles.link}`} rel="noreferrer">
          <span className={styles.border} />
          <span className={`group-hover:bg-opacity-0 duration-400 ${styles.btn}`}>
            <span className={styles.text}>Scanner un QRCode</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
