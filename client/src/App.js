import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useDispatch } from "redux";

import { loadUser } from "./redux/actions/authActions";

import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import UserReclamation from "./components/userReclamation/UserReclamation";
import SuperUserReclamation from "./components/superUserReclamation/SuperUserReclamation";
import ReclamationsTable from "./components/ReclamationsTable";
import store from "./redux/store";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [loadUser]);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/user-reclamation" exact component={UserReclamation} />
        <Route
          path="/super-user-reclamation"
          exact
          component={SuperUserReclamation}
        />
        <Route path="/reclamations-table" exact component={ReclamationsTable} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
