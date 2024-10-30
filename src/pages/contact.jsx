import * as React from "react";
import css from '../styles/contact.module.css';

export default function Contact(props) {
    const { contacts } = props

    console.log(contacts)

    return (
        <div className={css.Layout}>
            <div className={css.layout_content}>
                <div className={css.contactEmbed}>
                    {contacts.map(contact =>
                        (
                        <div className = {css.contactThumbnailContainer}>
                            <a href={contact.link}> <img className = {css.contactThumbnail} src={contact.image} alt={contact.title}></img></a>
                        </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}