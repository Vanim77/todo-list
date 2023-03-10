import rocketLogo from '../assets/rocket.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logotipo de foguete" />
      <p className={styles.textTo}>to</p>
      <p className={styles.textDo}>do</p>
    </header>
  );
}
