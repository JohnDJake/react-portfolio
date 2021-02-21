import React from 'react'

export default function NavBar({ children }) {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue-grey darken-1">
                    <a className="brand-logo center">John Jacobson</a>
                    <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">{children}</ul>
                </div>
            </nav>
            <ul className="sidenav blue-grey darken-4" id="mobile-nav">{children}</ul>
        </div>
    )
}
