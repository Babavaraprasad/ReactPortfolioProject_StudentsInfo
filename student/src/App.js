import "./App.css";
import Maincomponent from "./components/Maincomponent/Maincomponent.js";
import { Route } from "react-router-dom";
import { Routes, Switch } from "react-router";
import Profileinfo from "./Pages/ProfileInfo";
import Addnew from "./Pages/AddNew";
import Shortlist from "./Pages/Shortlisted";
import Faq from "./Pages/Faq";

function App() {
  return (
    <div>
      <Maincomponent />
      <Switch>
        <Route path="/" exact={true}>
          <Profileinfo />
        </Route>
        <Route path="/add_new" exact={true} >
          <Addnew />
        </Route>
        <Route path="/shortlist" exact={true}>
          <Shortlist />
        </Route>
        <Route path="/faq" exact={true}>
          <Faq />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
