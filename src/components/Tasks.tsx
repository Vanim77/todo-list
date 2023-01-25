import { PlusCircle } from 'phosphor-react';

import styles from './Tasks.module.css';

export function Tasks() {
  return (
    <>
      <form className={styles.form}>
        <input placeholder="Adicione uma nova tarefa" type="text" />
        <div className={styles.newTaskButton}>
          <button type="submit">Criar</button>
          <PlusCircle size={20} />
        </div>
      </form>
      <main>
        <div className={styles.tasksContainer}>
          <div className={styles.tasksInfo}>
            <div className={styles.tasksInfoCreated}>
              <p>
                Tarefas criadas
              </p>
              <span>0</span>
            </div>
            <div>
              <div className={styles.tasksInfoDone}>
                <p>
                  Concluídas
                </p>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
