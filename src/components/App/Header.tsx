import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../config/routes';

const NavigationList: FC = () => (
    <div>
        <h1>
            <NavLink
                to={routes.home}
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                App
            </NavLink>
        </h1>
        <nav>
            <ul>
                <li>
                    <NavLink to={routes.todos}>Todo List</NavLink>
                </li>
                <li>
                    <NavLink to={routes.todosHooks}>
                        Todo List (Hooks version)
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
);

export default NavigationList;
