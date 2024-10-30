import * as React from "react";
import { useParams } from "react-router-dom";

import css from '../styles/projectinfo.module.css';
export default function ProjectInfo(props) {
    const {projects} = props;
    const {id} = useParams();

    const project = projects.find(a=> a.id === id)

    return(
        <div className={css.Layout}>
            <div className={css.layout_content}>
                <div className={css.projectContainer}>
                    <div className={css.leftColumn}>
                        <div className={css.projectTitle}>{project.title}</div>
                        <div className={css.projectSubtitle}>{project.subtitle}</div>
                        <div className={css.projectDescription}>{project.description}</div>
                        <div className={css.projectTech}>Technology Used: {project.tech}</div>
                        <div className={css.projectLink}><a href={project.link}>Link</a></div>
                    </div>
                    <div className={css.rightColumn}>
                        <div className={css.projectImageContainer}>
                            <img className={css.projectImage} src={project.image1}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}