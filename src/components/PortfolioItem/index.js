import React from 'react';
import PortfolioLink from "./PortfolioLink";
import "./styles.css";

export default function PortfolioItem({ item }) {
    return (
        <div className="col s12 l6 xl4 portfolio">
            <div className="card blue-grey darken-3">
                <div className="card-image"><img src={item.image} alt={`Screenshot of my ${item.title} app`} /></div>
                <div className="card-content"><span className="card-title">{item.title}</span></div>
                <div className="card-action">
                    <PortfolioLink href={item.deployed}>Check it out</PortfolioLink>
                    <PortfolioLink href={item.source}>View code</PortfolioLink>
                </div>
            </div>
        </div>
    )
}
