import React from "react"
import NavBarContainer from "./navbar/navbar_container";
import {Route, Switch, Link} from "react-router-dom"
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import { AuthRoute,ProtectedRoute } from "../util/route_util";
const App = () => (
    <div>
        <header>
            <Link to="/" className="hello">
                <h1>Flow Over Stack</h1>
            </Link>
            <NavBarContainer/>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer}/>
            <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
        </Switch>
    </div>
)
export default App;