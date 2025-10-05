import { Check, ChevronRight, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { IconsBtn } from './buttons';

export default function Tasks( { tasks, onTasksClick, onTaskDeleted } ) {
    const navigate = useNavigate();

    const onSeeTask = (task) => {
        const query = new URLSearchParams();
        query.set('title', task.title);
        query.set('desc', task.description);
        navigate(`/tarefa?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => ( // isCompleted
                <li key={task.id} className="flex gap-2">
                    <button 
                        className={`bg-slate-400 text-left text-white p-2 rounded-md w-[100%] flex items-center gap-2 hover:cursor-pointer ${task.isCompleted && 'line-through'}`}
                        onClick={() => onTasksClick(task.id)}
                    >
                        {task.isCompleted && <Check/>}
                        {task.title}
                    </button>

                    <IconsBtn onClick={() => onSeeTask(task)}>
                        <ChevronRight/>
                    </IconsBtn>
                    <IconsBtn onClick={() => onTaskDeleted(task.id)}>
                        <Trash2/>
                    </IconsBtn>
                </li>
            ))}
        </ul>
    );
}