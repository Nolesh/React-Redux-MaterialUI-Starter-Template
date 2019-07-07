import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Pages
import * as pages from "../containers/pages";

const AppRouter = ({children}) => (
    <BrowserRouter>  
        
        {
            children
        }

        <Switch>

            <Route exact path="/" render={() => (            
                <Redirect to="/desc"/>
            )}/>
            <Route exact path="/desc" component={pages.Description} />
            <Route exact path="/simple" component={pages.Simple} />
            <Route exact path="/complex" component={pages.Complex} />
            <Route exact path="/async" component={pages.Async} />
            <Route component={pages.NotFoundPage} />

        </Switch>

    </BrowserRouter>
);
  
export default AppRouter;