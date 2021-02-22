import React from 'react';
import projects from "./projects.json";
import PortfolioItem from "../../components/PortfolioItem";

export default function Portfolio() {
    return (
        <div>
            <div className="row"><div className="col s12"><h2>Portfolio</h2></div></div>
            <div className="row">
                {projects.map(project => <PortfolioItem item={project} />)}
            </div>
        </div>
    )
}
