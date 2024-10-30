import * as React from "react";

import PersonalInfo from "./personalInfo.jsx"
import Skills from "./skills.jsx"
import Education from "./education.jsx"

import css from '../styles/home.module.css';

function Home(props) {
    const {personalInfo, skills} = props

    return (
      <div className={css.Layout}>
        <div className={css.layout_content}>
                <div className = {css.textContainer}>
                  <div className = {css.nameStyle}> Hello World! </div>
                  <div className = {css.titleStyle}>My name is Matthew Murno, explore my work on this site</div>
                </div>
            </div>
      </div>
    );
  }

export default Home