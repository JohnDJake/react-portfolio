import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactIcon({ contact }) {
    return (
        <div className="col s6 m4 l3 xl2">
            <a className="tooltipped" data-position="bottom" data-tooltip={contact.tooltip} href={contact.href} target="_blank">
                <FontAwesomeIcon icon={contact.icon} size="9x" />
            </a>
        </div>
    )
}
