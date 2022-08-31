import "./App.css";
import Maincomponent from "./components/Maincomponent/Maincomponent.js";
import { Route } from "react-router-dom";
import { Routes, Switch } from "react-router";
import Profileinfo from "./Pages/ProfileInfo";
import Addnew from "./Pages/AddNew";
import Shortlist from "./Pages/Shortlisted";
import Faq from "./Pages/Faq";
import Layout from "./components/Maincomponent/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <Profileinfo/>
        </Route>
        <Route path="/add_new" exact={true} >
          <Addnew/>
        </Route>
        <Route path="/shortlist" exact={true}>
          <Shortlist/>
        </Route>
        <Route path="/faq" exact={true}>
          <Faq />
        </Route>
      </Switch>
      </Layout>
  
  );
}

export default App;
