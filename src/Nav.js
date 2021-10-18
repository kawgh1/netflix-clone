import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

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
                <img
                    className="nav__logo"
                    src="/assets/images/netflix_logo.png"
                    alt="Netflix Logo"
                />
                <img
                    className="nav__avatar"
                    src="/assets/images/netflix_avatar.png"
                    alt="Avatar"
                />
            </div>
        </div>
    );
}

export default Nav;
