import React from 'react';
import { Link } from 'react-router-dom';
import pytel from '../resources/pytel.png';
import devChat from '../resources/Dev-Chat.png';
import pytwe from '../resources/pytweBot.png';
import hWorld from '../resources/firstWan.png';
import projectStyle from '../styles/projects.css';
import copinya from '../resources/Copinya.png';


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


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.getElementById("myBtn") != null) {
        if (document.documentElement.scrollTop === 0 && document.body.scrollTop === 0){
            document.getElementById("myBtn").style.display = "none";
        }
        if ((document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

}

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
        <Card projectName="PytelBot" link="http://github.com/alkesst/pytelbot" title="Playful bot in telegram"
              tryProject="https://telegram.me/pytel_bot" image={pytel}>
            Telegram bot whose main target is to entertain its users. It has got a lot of memes, funny videos
            some real-time reactions, animal photos and it contains a data base to save all the data, such as the
            sent messages, the times you uses a command, etc. The bot is made with Python 3.
        </Card>
        <Card projectName="Dev-Chat" link="http://github.com/alkesst/dev-chat"
              title="A chat made by developers, for developers." moreInfo="/DevChat" image={devChat}>
            A console-chat made in C. The custom client connects through a SSL Layer to a known server with an
            username requested by the server, and given by the user. The client, as well,
            handles editing non-sent messages. Project made
            with <a href="http://melchor9000.me" target="_blank" rel="noreferrer noopener">Melchor Garau</a>.
        </Card>
        <Card projectName="Copinya Shell" link="http://github.com/alkesst/copinya" image={copinya}>
            Copinya is a custom Unix Shell. This is a project for the degree.
        </Card>
        <Card projectName="Dev-Chat Desktop" link="https://github.com/Alkesst/Dev-ChatDesktop"
              image={hWorld} moreInfo="/DevChatDesktop"
              title="A chat made by developers, for developers. Desktop Edition">
            A <a href="http://github.com/alkesst/dev-chat" rel="noreferrer noopener">Dev-Chat</a> interface being made
            for desktop with Qt5 and C++11. Currently under construction. (Example in the right window).
        </Card>
        <Card projectName="Pytwe bot" link="http://github.com/alkesst/pytwebot" title="Another twitter bot"
              tryProject="http://twitter.com/pytwe_bot" image={pytwe}>
            This bot is currently tweeting the whole Quixote by Cervantes. A typical spanish literary work.
            Also it tweets every 21:35, 0:00, 3:14 and 4:20 their respective comments associated with that hours.
            It also reacts to some patterns such as "when te pasa".
        </Card>
        <Card projectName="Alkesst's page" link="https://github.com/alkesst/alkesst.github.io/tree/gh-pages"
              title="This page lol!" tryProject="#/projects">
            Is actually this page. Made with React, Redux and Bootstrap. Just a little page to let people know me and learn
            some JavaScript and its libraries.
        </Card>
        <Card projectName="RPI Assembly" link="https://github.com/alkesst/RPIAssembly"
              title="Assembly code for ARM Architecture using a Raspberry Pi">
            Is just some exercises made in class about assembly code for ARM Architecture. In this project you will find
            code that uses an external library (wiringPi pins) and code that sets manually the output and input pins with
            irq and ifq exceptions.
        </Card>
        <Card projectName="TDD Testing" link="https://github.com/alkesst/tddtesting"
              title="A TDD Introduction">
            A project which main target is learn TDD and requirements engineering using jUnit 5
            and common problems to solve using this methodology.
        </Card>
    </div>
