import React, { Component } from 'react';

import { Task, TaskId } from '../../models/Task';
import api from './api';
import TodoItem from './TodoItem';

type TodosState = {
    tasks: Task[];
    isLoading: boolean;
};

class Todos extends Component<unknown, TodosState> {
    state = {
        tasks: [],
        isLoading: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        api.getTasks().then(response => {
            this.setState({
                tasks: response.data,
                isLoading: false,
            });
        });
    }

    componentWillUnmount() {
        this.setState({
            tasks: [],
            isLoading: false,
        });
    }

    toggleCompleted = (id: TaskId): void => {
        this.setState(({ tasks: prevTodos }) => {
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

    render(): JSX.Element {
        const { tasks, isLoading } = this.state;
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
                                        onToggleCompleted={this.toggleCompleted}
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
    }
}

export default Todos;
