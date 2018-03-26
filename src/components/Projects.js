import React from 'react';
import { Link } from 'react-router-dom';
import projectStyle from '../styles/projects.css';

/*mb-3 -> Margin bottom type 3*/
export default () =>
    <div className="container-fluid container">
        <h1>Project time!</h1>
        <div className="row">
            <div className="col">
                <div className="card mb-3" id="projects" style={projectStyle}>
                    <div className="card-body">
                        <h5>
                            My own projects!
                        </h5>
                        <p className="card-text">
                            Here you will find projects I made
                        </p>
                        <Link className="btn btn-outline-dark" to="/MyProjects">Go!</Link>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card mb-3" id="projects" style={projectStyle}>
                    <div className="card-body">
                        <h5>
                            Projects in which I collaborate!
                        </h5>
                        <p className="card-text">
                            Here you will find projects I contributed
                        </p>
                        <Link className="btn btn-outline-dark" to="CollabProjects">Go!</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>