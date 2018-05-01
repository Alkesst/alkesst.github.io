import React from 'react';
import { Link } from 'react-router-dom';
import hw from '../resources/HackersWeek.png';
import youtubeAudio from '../resources/new.png';
import projectStyle from '../styles/projects.css';
import topicFriends from '../resources/topicFriends.png';

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
                {link ?
                    <a href={link} target="_blank" rel="noreferrer noopener" className="card-link btn btn-outline-dark">
                        See project</a>
                    :
                    null
                }
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

function topFunction() {
    window.scrollTo(0,0);
}


export default () =>
    <div>
        <h1>Project time!</h1>
        <button className="btn btn-outline-info" onClick={topFunction} id="myBtn" title="Go to top">Go Top!</button>
        <div className="row">
            <Link className="btn btn-outline-info text" id="button" to="/projects">Go back!</Link>
        </div>
        <Card projectName="Youtube Audio" link="https://github.com/RaulWhite/youtubeAudio"
              title="Web where you can listen the audio from youtube videos" tryProject="https://majorcadevs.github.io/ytAudio/"
              image={youtubeAudio}>
            Frontend made with React using Bootstrap 4 and a bit of imagination and creativity. It works
            with <a target="_blank" rel="noreferrer noopener"
                    href="https://github.com/melchor629/youtubedl-audio-api">youtubedl Audio Api</a> made
            by <a target="_blank" rel="noreferrer noopener"
                  href="https://melchor9000.me">Melchor Garau</a>. The author of the original idea
            is <a target="_blank" rel="noreferrer noopener"
                  href="https://github.com/RaulWhite">Raúl Blanco</a>.
        </Card>
        <Card projectName="TopicFriends" link="https://github.com/TopicFriends/TopicFriends"
              tryProject="https://topicfriends.org" image={topicFriends}>
            Social Network that connects people based on shared actionable interests and locations.
        </Card>
        <Card projectName="Go4Me">
            Go4Me is an app for lazy people or handicaped people. Its main target is to make users contact each other
            to reach an agreement and one of them sends an order to the other one.
            Currently is under construction and the repo must be private until we finish because this is a project for
            the degree.
        </Card>
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
    </div>