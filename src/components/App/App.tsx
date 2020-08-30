import * as React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Todos from '../Todos';
import Header from './Header';
import routes from '../../config/routes';

const App = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Redirect exact from={routes.home} to={routes.todo} />
            <Route exact path={routes.todo}>
                <Todos />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default App;
