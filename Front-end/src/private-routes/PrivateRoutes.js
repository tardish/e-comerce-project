import React from 'react';
import ConfigRoutes from '../config/routes';
import { Redirect, Switch ,Route} from 'react-router-dom';



function PrivateRoutes (props) {
    const role = props.role || "guest";

    const allowedRoutes = ConfigRoutes[role].allowedRoutes;
    const redirectRoutes = ConfigRoutes[role].redirectRoutes;

    return(
        <Switch>
            {allowedRoutes.map(route =>(<Route
                path = { route.url }
                key = { route.url }
                exact
            >
                <route.component setRole={props.setRole}/>
                </Route>
                ))}
            <Redirect to={redirectRoutes}/>
        </Switch>
    );
    
}
export default PrivateRoutes;