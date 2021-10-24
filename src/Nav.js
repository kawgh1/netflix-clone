import React, { useEffect, useState } from "react";
import {Link as ReactRouterLink} from 'react-router-dom'
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    const user = null;

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    // disappearing nav bar on scroll
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        // clean up
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
            <ReactRouterLink to='/'><img
                    className="nav__logo"
                    src="/assets/images/netflix_logo.png"
                    alt="Netflix Logo"
                /> </ReactRouterLink>
                {user ? <img
                    className="nav__avatar"
                    src="/assets/images/netflix_avatar.png"
                    alt="Avatar"
                    style={{ borderRadius: "1px" }}
                /> : <ReactRouterLink to='/login'>
                <button className="nav__button">Sign In</button>
                 </ReactRouterLink>}
                
            </div>
        </div>
    );
}

export default Nav;
