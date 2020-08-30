import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../config/routes';

const NavigationList: FC = () => (
    <div>
        <h1>App</h1>
        <nav>
            <ul style={{ listStyle: 'none' }}>
                <li>
                    <NavLink to={routes.todos}>Todo List</NavLink>
                </li>
                <li>
                    <NavLink to={routes.todosHooks}>Todo List (Hooks version)</NavLink>
                </li>
            </ul>
        </nav>
    </div>
);

export default NavigationList;
