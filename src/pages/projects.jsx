import * as React from "react";

import css from '../styles/projects.module.css';

import { Link } from "react-router-dom";

export default function Projects(props) {
    const { projects } = props

    console.log(projects)

    return (
        <div className={css.Layout}>
            <div className={css.layout_content}>
                <div className={css.projectEmbed}>  
                {projects.map(project=> 
                    project.thumbnail && (
                    <div className = {css.projectThumbnailContainer}> 
                        <Link key={project.id} to={"/projects/" + project.id}>
                            <img className={css.projectThumbnail} src={project.thumbnail}/>
                            <div className = {css.projectTitle}></div>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
      </div>
    );
}