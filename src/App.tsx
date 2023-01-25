import rocketLogo from './assets/rocket.svg';
import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logotipo de foguete" />
      <p className={styles.textTo}>to</p>
      <p className={styles.textDo}>do</p>
    </header>
  )
}
