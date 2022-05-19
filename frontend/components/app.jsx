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
const App = () => (
    <div>
        <NavBarContainer/>
        <Switch>
            <Route exact path="/" render={()=>('Home')} />
            <AuthRoute exact path="/login" component={LogInFormContainer}/>
            <AuthRoute exact path="/signup" component={SignUpFormContainer}/>
            <Route exact path="/questions/:id" component={QuestionShowContainer} />
            <Route exact path="/questions" component={QuestionIndexContainer}/>
            <ProtectedRoute exact path="/questions/new" component={CreateQuestionFormContainer}/>
            <ProtectedRoute exact path="/questions/:id/edit" component={EditQuestionFormContainer}/>
        </Switch>
    </div>
)
export default App;