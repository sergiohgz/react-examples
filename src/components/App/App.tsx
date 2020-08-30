import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import routes from '../../config/routes';
import Home from '../Home';
import Todos from '../Todos';
import TodosHooks from '../TodosHooks';
import Header from './Header';

const App = () => (
    <BrowserRouter>
        <Header />
        <hr />
        <Switch>
            <Redirect exact from={routes.basePath} to={routes.home} />
            <Route exact path={routes.home}>
                <Home />
            </Route>
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
