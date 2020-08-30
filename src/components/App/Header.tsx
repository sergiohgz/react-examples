import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationList: FC = () => (
    <div>
        <h1>App</h1>
        <nav>
            <ul style={{ textDecoration: 'none' }}>
                <NavLink to="todo">Todo</NavLink>
            </ul>
        </nav>
    </div>
);

export default NavigationList;
