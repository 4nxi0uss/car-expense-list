import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import StoreProvider from './store/StoreProvider';


const App = () => (
    <StoreProvider>
        <Header />
        <Router>
            <div className="content">
                <Navigation />
            </div>
        </Router>
    </StoreProvider>
);

export default App;
