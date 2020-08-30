import React, { FC } from 'react';
import { Task, TaskId } from '../../models/Task';

type TodoItemProps = Task & {
    onToggleCompleted: (id: TaskId) => void;
};

const TodoItem: FC<TodoItemProps> = ({
    id,
    completed,
    description,
    onToggleCompleted,
}) => (
    <li>
        <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
        />
        <span>{description}</span>
    </li>
);

export default TodoItem;
