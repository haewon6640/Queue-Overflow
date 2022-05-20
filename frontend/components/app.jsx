import React from "react"
import NavBarContainer from "./navbar/navbar_container";
import {Route, Switch, Link} from "react-router-dom"
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import QuestionIndexContainer from "./questions/question_index_container"
import { AuthRoute,ProtectedRoute } from "../util/route_util";
import QuestionShowContainer from "./questions/question_show_container";
import CreateQuestionFormContainer from "./forms/create_question_form_container";
import EditQuestionFormContainer from "./forms/edit_question_form_container";
import SideBarContainer from "./sidebar/sidebar_container";
const App = () => (
    <div className="main-container">
        <NavBarContainer/>
        <div className="content-container">
            <SideBarContainer/>
            <div className="body-container">
                <Switch>
                    <Route exact path="/" render={()=>('Home')} />
                    <AuthRoute exact path="/login" component={LogInFormContainer}/>
                    <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
                    <ProtectedRoute exact path="/questions/new" component={CreateQuestionFormContainer}/>
                    <Route exact path="/questions/:id" component={QuestionShowContainer} />
                    <ProtectedRoute exact path="/questions/:id/edit" component={EditQuestionFormContainer}/>
                    <Route exact path="/questions" component={QuestionIndexContainer}/>
                </Switch>
            </div>
        </div>
    </div>
)
export default App;