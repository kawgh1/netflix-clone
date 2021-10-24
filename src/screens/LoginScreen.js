import React, { useState } from "react";
import "./LogInScreen.css";
import SignUpScreen from "./SignUpScreen";
import {Link as ReactRouterLink} from 'react-router-dom'

function LogInScreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
            <ReactRouterLink to='/'><img
                    className="nav__logo"
                    src="/assets/images/netflix_logo.png"
                    alt="Netflix Logo"
                /> </ReactRouterLink>
                <button
                    className="loginScreen__button"
                    onClick={() => setSignIn(true)}
                >
                    Sign In
                </button>
                <div className="loginScreen__gradient" />
            </div>

            <div className="loginScreen__body">
        
                {signIn ? (
                        <SignUpScreen />
                        ) : (
                        <>
                            <h1>Unlimited films, TV programmes and more.</h1>
                            <h2>Watch anywhere. Cancel at any time.</h2>
                            <h3>
                            Ready to watch? Enter your email to create or restart your
                            membership.
                            </h3>

                            <div className="loginScreen__input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button
                                onClick={() => setSignIn(true)}
                                className="loginScreen__getStarted"
                                >
                                GET STARTED
                                </button>
                            </form>
                            </div>
                        </>
                        )}
            </div>
        </div>
    );
}

export default LogInScreen;