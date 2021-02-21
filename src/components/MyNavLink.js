import React from 'react'

export default function MyNavLink(props) {
    return (
        <li className={props.className}>
            <a href={props.href} className={props.className + " sidenav-close"}>{props.children}</a>
        </li>
    )
}
