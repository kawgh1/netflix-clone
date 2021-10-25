import React, { useRef, useState } from "react";
import "./SignUp.css";
import { auth } from "../firebase";
import {Link as ReactRouterLink, useHistory} from 'react-router-dom'

function SignUp() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [name, setName] = useState('')
    const history = useHistory();
  
    const register = (e) => {
      e.preventDefault();
  
      auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        // .then((authUser) => {
        //   console.log(authUser);
        // })
      .then((result) => {
        result.user.updateProfile({displayName: name })
      })
      .then(() => {
        history.push('/login');
    })
        .catch((error) => {
          alert(error.message);
        });
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
                            <ReactRouterLink to='/login'>
                                <button className="nav__button">Sign In</button>
                            </ReactRouterLink>
                        </div>
                    </div>

                    <div className='signupScreen__body'>
                            <form>
                            <h1>Sign Up</h1>
                            <input onChange={({ target }) =>
                                setName(target.value)
                            } placeholder="Name" type="text" />
                            <input ref={emailRef} placeholder="Email" type="email" />
                            <input ref={passwordRef} placeholder="Password" type="password" />
                            <button type="submit" onClick={register}>
                                Sign Up
                            </button>
                    
                            <h4>
                                <span className="signupScreen__gray">Already have Netflix? &nbsp;</span>
                                
                                <ReactRouterLink to='/login' style={{textDecoration:'none'}}><span className="signupScreen__link" >
                                Sign In.
                                </span> </ReactRouterLink>
                            </h4>
                            </form>
                    </div>
                </div>
                
            
      </div>
    );
  }

export default SignUp;