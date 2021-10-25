import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./screens/SignIn";
import SignUp from './screens/SignUp'
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./screens/Profile";

function App() {
    const user = useSelector(selectUser);
    // redux
    const dispatch = useDispatch();

    // listen to user's logged in state
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if (userAuth) {
          // logged in
          console.log("logged in user, ", userAuth.displayName);
          // redux
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
          }))
        } else {
          // logged out
          // if logged out, set global user back to null
          // redux
          dispatch(logout);
        }
      });
      // clean up
      // return () => {
      //   unsubscribe();
      // }
      // same as
      return unsubscribe;
      
    }, []);
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
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
            {user ? (
          <HomeScreen />
        ) : (
              <SignIn />)}
            </Route>
            <Route path="/signup">
            {user ? (
          <HomeScreen />
        ) : (
              <SignUp />)}
            </Route>
          </Switch>
        )}
        
      </Router>
        </div>
    );
}

export default App;
