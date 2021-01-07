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
import PrivateRoute from "./routing/PrivateRoute";
import { ToastContainer } from "react-toastify";
import MyReclamations from "./components/MyReclamations";
import MyReclamationDetails from "./components/MyReclamationDetails";

import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [loadUser]);
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-center" />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute
          path="/user-reclamation"
          exact
          component={UserReclamation}
        />
        <PrivateRoute
          path="/super-user-reclamation"
          exact
          component={SuperUserReclamation}
        />
        <PrivateRoute
          path="/reclamations-table"
          exact
          component={ReclamationsTable}
        />
        <PrivateRoute
          path="/mes-reclamations"
          exact
          component={MyReclamations}
        />
        {/* <PrivateRoute
          path="/ma-reclamation"
          exact
          component={MyReclamationDetails}
        /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
