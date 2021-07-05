import * as React from 'react';

import { Switch, Route } from 'react-router';
import ContentForm from '../contentForm/ContentForm';
import Expenses from '../expenses/Expenses';

import './Content.scss'

const Content = () => {

    return (

        <main className="main">
            <Switch>
                <Route exact path="/" render={() => <ContentForm />} />
                <Route exact path="/expenses" render={() => <Expenses />} />
            </Switch>
        </main>
    )
}
export default Content