import React from 'react';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import ContactIcon from "../components/ContactIcon";

const contacts = [
    { icon: faGithub, href: "https://github.com/JohnDJake", tooltip: "GitHub" },
    { icon: faLinkedin, href: "https://www.linkedin.com/in/johndjake/", tooltip: "LinkedIn" },
    { icon: faEnvelope, href: "mailto:john.d.jake@gmail.com", tooltip: "Email" },
    { icon: faPhone, href: "tel:+425202JOHN", tooltip: "Phone" },
    { icon: faFile, href: "assets/docs/Resume_January_2021.pdf", tooltip: "Resume" }
];

export default function Contact() {
    return (
        <div>
            <div className="row"><div className="col s12"><h2>Contact Me</h2></div></div>
            <div className="row">
                {contacts.map(contact => <ContactIcon contact={contact} />)}
            </div>
        </div>
    )
}
