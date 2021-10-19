import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
    const user = null;
    return (
        <div className="app">
            {/* <h1>Lets build Netflix</h1> */}
            {/* <HomeScreen /> */}
            {/* <MovieDetailsScreen /> */}

            <Router>
                {!user ? (
                    <LoginScreen />
                ) : (
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                    </Switch>
                )}
            </Router>
        </div>
    );
}

export default App;
