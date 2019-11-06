import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <container
        class="container"
        role="main"
        style={{
          height: "100%",
          position: "absolute",
          left: "0px",
          width: "100%",
          overflow: "hidden"
        }}
      >
       

        <header class="header">HEADERR</header>

        <nav class="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
           
          </ul>
        </nav>

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
