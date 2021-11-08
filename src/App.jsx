import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, Footer } from './layout';
import * as Pages from './pages';
import './style.css';

export const App = () => {
    return (
        <>
            <Header />

            <Switch>
                <Route exact path='/'>
                    <Pages.Home />
                </Route>
                <Route path='/About'>
                    <Pages.About />
                </Route>
                <Route path='/Portfolio'>
                    <Pages.Portfolio />
                </Route>
                <Route path='/Contact'>
                    <Pages.Contact />
                </Route>
                <Route>
                    {/* Everything else redirects to home */}
                    <Redirect exact to="/" />
                </Route>
            </Switch>

            <Footer />
        </>
    )
}