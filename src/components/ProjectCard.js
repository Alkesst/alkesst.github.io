import React from 'react';
import { Link } from 'react-router-dom';
import projectStyle from '../styles/projects.css';

export const Card = ({projectName, title, text, link, tryProject, children, moreInfo, image }) =>
    <div className="mb-3 col-12 col-md-6 col-lg-4" id="projects" style={projectStyle}>
        <div className="card h-100" >
            <div className="card-body">
                {image?
                    <img className="card-img-top" src={image} alt="Card cap"/>
                    :
                    null
                }
                <h2 className="card-title">{projectName}</h2>
                <h6 className="card-subtitle mb-2">{title}</h6>
                <p className="card-text">{text}{children}</p>
            </div>
            <div className="card-footer">
                <a href={link} target="_blank" rel="noreferrer noopener" className="card-link btn btn-outline-dark"
                   style={projectStyle}>
                    See project</a>
                {tryProject?
                    <a className="card-link btn btn-outline-dark" href={tryProject} target="_blank"
                       rel="noreferrer noopener">Try this project</a>
                    :
                    null}
                {moreInfo?
                    <Link className="card-link btn btn-outline-dark" to={moreInfo}>More Info</Link>
                    :
                    null}
            </div>
        </div>
    </div>;