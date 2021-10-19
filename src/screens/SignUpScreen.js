import React from "react";
import "./SignUpScreen.css";

function SignUpScreen() {
    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button type="submit">Sign In</button>
                <h4>
                    <span className="signUpScreen__gray">
                        New to Netflix?&nbsp;{" "}
                    </span>{" "}
                    <span className="signUpScreen__link">Sign up now.</span>
                </h4>
            </form>
        </div>
    );
}

export default SignUpScreen;
