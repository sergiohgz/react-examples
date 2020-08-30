import React, { FC, useEffect, useState } from 'react';

import { Task, TaskId } from '../../models/Task';
import api from './api';
import TodoItem from './TodoItem';

const TodoList: FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setLoading] = useState(false);

    /*
     * Aquí se realiza la petición de datos, activando la carga de datos y
     * desactivandola una vez finalizada la petición. Cuando se sale de la
     * pantalla, se eliminan devuelve a un valor nulo
     */
    useEffect(() => {
        setLoading(true);
        api.getTasks().then(response => {
            setTasks(response.data);
            setLoading(false);
        });
        return () => setTasks([]);
    }, [setTasks, setLoading]);

    const toggleCompleted = (id: TaskId): void => {
        setTasks(prevTodos => {
            const itemPosition = prevTodos.findIndex(task => task.id === id);
            const todoToUpdate = prevTodos[itemPosition];
            const updatedTodos = [
                ...prevTodos.slice(0, itemPosition),
                { ...todoToUpdate, completed: !todoToUpdate.completed },
                ...prevTodos.slice(itemPosition + 1),
            ];
            return updatedTodos;
        });
    };

    return (
        <div>
            <h2>Todo List</h2>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    {tasks.length > 0 ? (
                        <ul>
                            {tasks.map(task => (
                                <TodoItem
                                    key={task.id}
                                    id={task.id}
                                    description={task.description}
                                    completed={task.completed}
                                    onToggleCompleted={toggleCompleted}
                                />
                            ))}
                        </ul>
                    ) : (
                        <div>There is no todo in the list</div>
                    )}
                </div>
            )}
        </div>
    );
};

export default TodoList;
