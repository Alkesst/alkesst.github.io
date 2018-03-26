import React from 'react';
import { Link } from 'react-router-dom';
import hw from '../resources/HackersWeek.png';
import youtubeAudio from '../resources/youtubeAudio.png';
import projectStyle from '../styles/projects.css';

const Card = ({projectName, title, text, link, tryProject, children, moreInfo, image }) =>
    <div className="mb-3" id="projects" style={projectStyle}>
        <div className="card">
            <div className="card-body">
                {image?
                    <img className="card-img-top" src={image} alt="Card cap"/>
                    :
                    null
                }
                <h2 className="card-title">{projectName}</h2>
                <h6 className="card-subtitle mb-2">{title}</h6>
                <p className="card-text">{text}{children}</p>
                <a href={link} target="_blank" rel="noreferrer noopener" className="card-link btn btn-outline-dark">
                    See project</a>
                {tryProject?
                    <a className="card-link btn btn-outline-dark"
                       href={tryProject} target="_blank" rel="noreferrer noopener">Try this project</a>
                    :
                    null}
                {moreInfo?
                    <Link className="card-link btn btn-outline-dark" to={moreInfo}>More Info</Link>
                    :
                    null}
            </div>
        </div>
    </div>;


export default () =>
    <div>
        <h1>Project time!</h1>
        <Card projectName="HackersWeek" link="https://github.com/ConsejoInfUMA/HackersWeekMalaga"
              tryProject="https://hackersweek.es"
              title="Official webpage for the Hackers Week event in Málaga" image={hw}>
            Updated all the information of the page from the last edition and improved some
            parts of the code.
        </Card>
        <Card projectName="ConsejoInfUma page" link="https://github.com/ConsejoInfUMA/WebConsejoInfUMA"
              title="Web page for the Council of students of the higher technical engineering school of computer science">
            I dont even know if "Council of students of the higher technical engineering school of computer science"
            is correct. I'm doing this project with some
            grade colleagues.
        </Card>
        <Card projectName="Youtube Audio" link="https://github.com/RaulWhite/youtubeAudio"
              title="Web where you can listen the audio from youtube videos" tryProject="https://raul.ml/ytAudio/"
              image={youtubeAudio}>
            Frontend made with React using Bootstrap 4 and a bit of imagination and creativity. It works
            with <a target="_blank" rel="noreferrer noopener"
                    href="https://github.com/melchor629/youtubedl-audio-api">youtubedl Audio Api</a> made
            by <a target="_blank" rel="noreferrer noopener"
                  href="https://melchor9000.me">Melchor Garau</a>. The author of the original idea
            is <a target="_blank" rel="noreferrer noopener"
                  href="https://github.com/RaulWhite">Raúl Blanco</a>.
        </Card>
    </div>