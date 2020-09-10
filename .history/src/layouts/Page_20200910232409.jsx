import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { links, urlAPI } from 'constans/links';




const Page = () => {

    const routes = links.map(route => (
        <Route key={route.id} path={route.path} exact={route.exact ? route.exact : false} component={route.component} />
    ))


    return (
        <>
            <Switch>
                {routes}
            </Switch>
        </>
    );
}

export default Page;