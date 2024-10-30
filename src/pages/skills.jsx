import * as React from "react";
import { useState } from "react";

import css from '../styles/skills.module.css';

// Define skill icons for each skill using Font Awesome
const skillIcons = {
    HTML: "fab fa-html5", 
    CSS: "fab fa-css3-alt",
    JavaScript: "fab fa-js",
    React: "fab fa-react",
    Python: "fab fa-python",
    "D3.js": "fas fa-chart-bar",
    C: "fas fa-code",
    WebGL: "fab fa-js-square",
    "Responsive Design": "fas fa-mobile-alt"
};

// Define colors for each skill icon
const iconColors = {
    HTML: "#E34F26", 
    CSS: "#1572B6",
    JavaScript: "#F0DB4F",
    React: "#61DAFB",
    Python: "#3776AB",
    "D3.js": "#F9A03C",
    C: "#A8B9CC",
    WebGL: "#000000",
    "Responsive Design": "#8CC3D6"
};

export default function Skills(props) {
    const { skills } = props;
    const [shuffledSkills, setShuffledSkills] = useState([]);

    // Function to shuffle an array
    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    // Shuffle skills array on initial render
    useState(() => {
        setShuffledSkills(shuffleArray([...skills])); 
    }, [skills]);

    return (
        <div className={css.Card}>
            <div className={css.Title}>Skills</div>
            <div className={css.SkillsContainer}>
                {shuffledSkills.map((skill, index) => (
                    <div key={index} className={css.Skill}>
                        <i 
                            className={`${skillIcons[skill]} ${css.Icon}`} 
                            style={{ fontSize: "40px", color: iconColors[skill] }} 
                            title={skill} // Add title attribute to display skill name on hover
                        ></i>
                    </div>
                ))}
            </div>
        </div>
    );
}