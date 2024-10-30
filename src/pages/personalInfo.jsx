import React from "react";
import css from '../styles/personalInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import icons

export default function PersonalInfo(props) {
    const { personalInfo } = props;
    const info = personalInfo[0];

    return (
        <div className={css.Card}>
            <div>
                <p className={css.Title}>Personal Info</p>
            </div>
            <div className={css.Info}>
                <div><FontAwesomeIcon icon={faEnvelope} /> {info.email}</div>
                <div><FontAwesomeIcon icon={faPhone} /> {info.phone}</div>
                <div><FontAwesomeIcon icon={faMapMarkerAlt} /> {info.location}</div>
            </div>
        </div>
    );
}