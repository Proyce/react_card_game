import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <section className="container">
                <section className="contact left up-nav">
                    <Link to="/" className="phone-email"><span className="fa fa-phone"></span>   +00 123 456 78</Link>
                    <Link to="/" className="phone-email"><span className="fa fa-paper-plane"></span>  email@example.com</Link>
                </section>
                <section className="social-icons right up-nav">
                    <i className="fa fa-facebook sm-icons"></i>
                    <i className="fa fa-twitter sm-icons"></i>
                    <i className="fa fa-instagram sm-icons"></i>
                    <i className="fa fa-dribbble sm-icons" ></i>
                </section>
                <section className="clear"></section>
            </section>

            <section className="navigation-bar">
                <h2 className="nav-brand"><i className="fa fa-paw"></i>  Pet Sitting</h2>
                <nav className="navbar">
                    <ul className="navbar-items">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/vetenarian">VETENARIAN</Link></li>
                        <li><Link to="/services">SERVICES</Link></li>
                        <li><Link to="/gallery">GALLERY</Link></li>
                        <li><Link to="/pricing">PRICING</Link></li>
                        <li><Link to="/blog">BLOG</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </nav>
            </section>

        </nav>
    );
};

export default NavBar;
