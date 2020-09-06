import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import links from 'constans/links';
import HomePage from 'layouts/Pages/HomePage'
import ExchangeRate from 'layouts/Pages/ExchangeRate'
import ManageFinances from 'layouts/Pages/ManageFinances'



const Page = () => {


    // const routes = links.map(route => (
    //     <Route key={route.id} path={route.path} exact={route.exact ? route.exact : false} component={route.component} />
    // ))


    return (
        <>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/exchange-rate' component={ExchangeRate} />
                <Route path='/manage-finances' component={ManageFinances} />

                {/* {routes} */}
            </Switch>
        </>
    );
}

export default Page;