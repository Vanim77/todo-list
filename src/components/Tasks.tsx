import { PlusCircle, ClipboardText, Trash } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import styles from './Tasks.module.css';

interface ITask {
  id: string;
  description: string;
  isChecked: boolean;
}

export function Tasks() {
  const [newTaskText, setNewTaskText] = useState('');
  const [tasks, setTasks] = useState([] as ITask[]);

  const isTaskContentEmpty = newTaskText.length === 0;

  function handleNewTaskContent(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks,
      {
        id: uuidv4(),
        description: newTaskText,
        isChecked: false
      }
    ]);

    setNewTaskText('');
  }

  return (
    <>
      <form onSubmit={handleNewTask} className={styles.form}>
        <input
          onChange={handleNewTaskContent}
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={newTaskText}
        />
        <label className={styles.newTaskButton}>
          <button
            disabled={isTaskContentEmpty}
            type="submit"
          >
            Criar
          </button>
          <PlusCircle size={20} />
        </label>
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

        <section>
          {tasks.length === 0
            ?
              <div className={styles.emptyTasks}>
                <ClipboardText size={56} />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            :
              <ul className={styles.taskList}>
                {tasks.map(task => {
                  return (
                    <li key={task.id} className={styles.singleTask}>
                      <input type="checkbox" />
                      <p>{task.description}</p>
                      <Trash size={24} />
                    </li>
                  );
                })}
              </ul>
          }
        </section>
      </main>
    </>
  );
}
