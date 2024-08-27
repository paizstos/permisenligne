import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Bienvenue sur le Simulateur de Permis</h1>
      <Link href="/test">
        <button className={styles.startButton}>Commencer le Test</button>
      </Link>
    </div>
  );
}
