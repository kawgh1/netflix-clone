import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
    const user = 5;
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
                </Switch>
            </Router>
        </div>
    );
}

export default App;
