import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./BoardLink";
import Todo from "./Todo";

function App() {
  return (
    <Router>
      <container class="container" role="main" >
        <div class="header">IT will be inthe future xd</div>


        <div class="nav">

          <Todo></Todo>

        </div>



        <section class="section">
          <Switch>
            <Route exact path="/">
              {/* <Home /> */}
            </Route>
            <Route path="/about">
              {/* <About /> */}
            </Route>
            <Route path="/dashboard">
              {/* <Dashboard /> */}
            </Route>


          </Switch>
        </section>


      </container>
    </Router>
  );
}


export default App;
