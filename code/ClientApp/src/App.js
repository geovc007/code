import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from './components/Home';
import Local from './components/Local';
import Register from './components/Register';

function App (){

    const browserHistory = createBrowserHistory();

    return (
        <Router history={browserHistory}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/local-news' component={Local} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </Router>
    );

}

export default App;
