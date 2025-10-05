import { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { DivCenter } from './components/divs';
import { Title } from './components/title';
import { v4 } from 'uuid'

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(tasks))
  }, [tasks]);

  const onTasksClick = (taskID) => {
    const newTask = tasks.map((task) => {
        if (task.id === taskID) {
          return {...task, isCompleted: !task.isCompleted}
        }

        return task;
    });

    setTasks(newTask);
  }

  const onTaskDeleted = (taskID) => {
      const deletedTask = tasks.filter(task => task.id != taskID)
      setTasks(deletedTask)
  }

  const onTaskCreate = (title, description) => {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }

  return (
    <>
      <div className="w-screen h-screen bg-slate-500 justify-center p-6">
        <DivCenter>
          <Title>
            Gerenciador de Tarefas
          </Title>
            <AddTask onTaskCreate={onTaskCreate} />
            <Tasks tasks={tasks} onTasksClick={onTasksClick} onTaskDeleted={onTaskDeleted} />
        </DivCenter>
      </div>
    </>
  )
}