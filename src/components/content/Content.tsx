import * as React from 'react';
import { useContext } from 'react';

import { Switch, Route, Redirect } from 'react-router';

import { StoreContex } from '../../store/StoreProvider';

import ContentForm from '../contentForm/ContentForm';
import Expenses from '../expenses/Expenses';

import './Content.scss'

const Content = () => {

    const { user } = useContext(StoreContex)

    return (
        // render content
        <main className="main">
            <Switch> 
                <Route exact path="/" render={() => <ContentForm />} />
                {Boolean(user) === false ? <Redirect from="/expenses" to='/' /> : <Route exact path="/expenses" render={() => <Expenses />} />}
                {/* <Route exact path="/expenses" render={() => <Expenses />} /> */}

            </Switch>
        </main>
    )
}
export default Content