import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { MemoriceRoutes } from "./MemoriceRoutes";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <MemoriceRoutes />
        </Switch>
      </div>
    </Router>
  );
}
