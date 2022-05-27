import React from "react"
import NavBarContainer from "./navbar/navbar_container";
import {Route, Switch, Link} from "react-router-dom"
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import QuestionIndexContainer from "./posts/question_index_container"
import { AuthRoute,ProtectedRoute, UserHomeRoute, HomeRoute } from "../util/route_util";
import QuestionShowContainer from "./posts/question_show_container";
import CreateQuestionFormContainer from "./forms/create_question_form_container";
import EditQuestionFormContainer from "./forms/edit_question_form_container";
import SideBarContainer from "./sidebar/sidebar_container";
import Home from "./home/home";
import UserIndexContainer from "./sidepages/user_index_container";
import UserShowContainer from "./sidepages/user_show_container"
import TagIndexContainer from "./sidepages/tag_index_container";
import Footer from "./footer/footer";
const App = () => (
    <div className="main-container">
        <NavBarContainer/>
        <Switch>
            <HomeRoute exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={LogInFormContainer}/>
            <AuthRoute exact path="/signup" component={SignUpFormContainer}/>                
            <ProtectedRoute exact path="/questions/:id/edit" component={EditQuestionFormContainer}/>
            <ProtectedRoute exact path="/questions/new" component={CreateQuestionFormContainer}/>
        </Switch>
        <div className="content-container">
            <SideBarContainer/>
            <div className="body-container">
                <Switch>
                    <UserHomeRoute exact path="/" component={QuestionIndexContainer}/>
                    <Route exact path="/tags" component={TagIndexContainer} />
                    <Route exact path="/users" component={UserIndexContainer} />
                    <Route exact path="/users/:id" component={UserShowContainer} />
                    <Route exact path="/questions/view/:id" component={QuestionShowContainer} />
                    <Route path="/questions" component={QuestionIndexContainer}/>
                </Switch>
            </div>
        </div>
        <Footer />
    </div>
)
export default App;