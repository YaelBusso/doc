import React from 'react';
import TextEditor from './TextEditor';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import Signup from "./authentication/Signup";
import { AuthProvider } from "../AuthContext";
import Profile from "./authentication/Profile";
import Login from "./authentication/Login";
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" exact>
    //       <Redirect to={`/documents/${uuidV4()}`} />
    //     </Route>
    //     <Route path="/documents/:id">
    //       <TextEditor />
    //     </Route>
    //   </Switch>
    // </Router>
    <Router>
    <AuthProvider>
      <Switch>
        {/* Drive */}
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/folder/:folderId" component={Dashboard} />

        {/* Profile */}
        <PrivateRoute path="/user" component={Profile} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />

        {/* Auth */}
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
    </AuthProvider>
  </Router>
  )
};

export default App;
