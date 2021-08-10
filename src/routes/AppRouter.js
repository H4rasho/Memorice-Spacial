import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Login } from "../components/auth/Login";
import { MemoriceRoutes } from "./MemoriceRoutes";
import { PrivateRoutes } from "./PrivateRoutes";

export default function App() {
    const {user} = useSelector(state => state.auth)

    const {logged} = user

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />

          <PrivateRoutes 
            path="/" 
            component={MemoriceRoutes}
            isAuthenticated={logged}
          />
        </Switch>
      </div>
    </Router>
  );
}


