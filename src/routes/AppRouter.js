import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { startChecking } from "../actions/auth";
import { AuthRoutes } from "./AuthRoutes";
import { MemoriceRoutes } from "./MemoriceRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export default function App() {

  const { checking, uid } = useSelector(state => state.auth)
  
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(startChecking())

  }, [dispatch]);

  if(checking){
    return <h5>Espere</h5>
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoutes 
              path="/auth" 
              component={AuthRoutes}
              isAuthenticated={!!uid} 
          />
          <PrivateRoutes 
              path="/" 
              component={MemoriceRoutes} 
              isAuthenticated={!!uid} 
              />
        </Switch>
      </div>
    </Router>
  );
}


