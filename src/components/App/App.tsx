import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import routes from '../../config/routes';
import TodosHooks from '../TodosHooks';
import Todos from '../Todos';
import Header from './Header';

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Redirect exact from={routes.home} to={routes.todo} />
            <Route exact path={routes.todos}>
                <Todos />
            </Route>
            <Route exact path={routes.todosHooks}>
                <TodosHooks />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default App;
