import rocketLogo from './assets/rocket.svg';
import plusIcon from './assets/plus-icon.svg';
import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      <header className={styles.header}>
        <img src={rocketLogo} alt="Logotipo de foguete" />
        <p className={styles.textTo}>to</p>
        <p className={styles.textDo}>do</p>
      </header>
      <div className={styles.newTaskBar}>
        <input placeholder="Adicione uma nova tarefa" type="text" />
        <div className={styles.newTaskButton}>
          <button>Criar</button>
          <img src={plusIcon} alt="símbolo de adição" />
        </div>
      </div>
    </div>
  )
}
