import React, { useRef } from "react";
import "./SignIn.css";
import { auth } from "../firebase";
import {Link as ReactRouterLink, useHistory} from 'react-router-dom'

function SignIn() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();
  
    const signIn = (e) => {
        e.preventDefault();
    
        auth
          .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
          )
          .then((authUser) => {
            // console.log(authUser);
          })
          .then(() => {
            history.push('/');
        })
          .catch((error) => alert(error.message));
      };
  
    return (
        <div className="signupScreen">
            <div className="signupScreen__gradient">

                    <div className="signUpScreen__top">
                        <div className="signUpScreen__background">
                            <ReactRouterLink to='/'><img
                                className="nav__logo"
                                src="/assets/images/netflix_logo.png"
                                alt="Netflix Logo"/> 
                            </ReactRouterLink>
                            <ReactRouterLink to='/signup'>
                                <button className="nav__button">Sign Up</button>
                            </ReactRouterLink>
                        </div>
                    </div>


                    <div className='signupScreen__body'>
                        <form>
                                <h1>Sign In</h1>
                                <p className="signupScreen__demo">
                                                For demo purposes user can enter
                                                username = "test@gmail.com" and password = "test123"
                                            </p>
                                <input ref={emailRef} placeholder="Email" type="email" />
                                <input ref={passwordRef} placeholder="Password" type="password" />
                                <button type="submit" onClick={signIn}>
                                    Sign In
                                </button>
                        
                                <h4>
                                <span className="signupScreen__gray">New to Netflix? </span>
                                    
                                    <ReactRouterLink to='/signup' style={{textDecoration:'none'}}><span className="signupScreen__link" >
                                    Sign Up.
                                    </span> </ReactRouterLink>
                                </h4>
                        </form>



                     </div>
                     </div>
        
      </div>
    );
  }

export default SignIn;