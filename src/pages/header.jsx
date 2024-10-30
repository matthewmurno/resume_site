import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"; // Import the chevron down icon
import css from '../styles/header.module.css';

function Header() {

    return (
        <header className={css.header}>
            <div className={css.headerItem} id={css.headerText}>
                <Link to="/">
                    <div>Home</div>
                </Link>
            </div>
            <div className={css.headerItem} id={css.headerText}>
                <Link to="about">
                    <div>About</div>
                </Link>
            </div>
            <div className={css.headerItem} id={css.headerText}>
                <Link to="projects">
                    <div>Projects</div>
                </Link>
            </div>
            <div className={css.headerItem} id={css.headerText}>
                <Link to="contact">
                    <div>Contact</div>
                </Link>
            </div>
        </header>
    );
}

export default Header;