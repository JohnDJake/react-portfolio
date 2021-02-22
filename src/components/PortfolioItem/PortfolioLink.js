import React from 'react'

export default function PortfolioLink({ href, children }) {
    return (
        <a className="link waves-effect waves-light btn red" href={href} target="_blank">{children}</a>
    )
}
