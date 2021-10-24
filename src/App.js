import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogInScreen from "./screens/LogInScreen";

function App() {
    const user = null;
    return (
        <div className="app">
            {/* <h1>Lets build Netflix</h1> */}
            {/* <HomeScreen /> */}
            {/* <MovieDetailsScreen /> */}

            <Router>
        
          <Switch>
            
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/login">
              <LogInScreen />
            </Route>
          </Switch>
        
      </Router>
        </div>
    );
}

export default App;
