import * as React from "react";

import css from '../styles/about.module.css';

export default function About() {
    return (
        <div className={css.Layout}>
            <div className= {css.layout_content}>
                <div className = {css.textContainer}>
                    <div className = {css.titleStyle}>My name is Matthew Murno, I’m a computer science graduate from Boston College with a minor in graphic design and digital art looking to break into a software engineering career. My unique blend of technical and creative skills drives my passion for building modern, visually engaging applications. I specialize in front-end development with React and Python and back-end technologies like Django, focusing on creating user-friendly digital experiences. My background in design inspires me to craft projects that are not only functional but also visually compelling, blending form and function within each build.</div>
                </div>
            </div>
        </div>
    );
}