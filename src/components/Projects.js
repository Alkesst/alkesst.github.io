import React from 'react';
import { Link } from 'react-router-dom';
import pytel from '../resources/pytel.png';
import devChat from '../resources/Dev-Chat.png';
import pytwe from '../resources/pytweBot.png';

/*mb-3 -> Margin bottom type 3*/
const Card = ({projectName, title, text, link, tryProject, children, moreInfo, image }) =>
    <div className="mb-3">
        <div className="card">
            <div className="card-body">
                {image?
                    <img className="card-img-top" src={image} alt="Card cap"/>
                    :
                    null
                }
                <h2 className="card-title">{projectName}</h2>
                <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
                <p className="card-text">{text}{children}</p>
                <a href={link} target="_blank" rel="noreferrer noopener" className="card-link">See project </a>
                {tryProject?
                    <a href={tryProject} target="_blank" rel="noreferrer noopener" className="card-link">Try this project </a>
                    :
                    null}
                {moreInfo?
                    <Link to={moreInfo}>More Info </Link>
                    :
                    null}
            </div>
        </div>
    </div>;

export default () =>
    <div>
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
        <Card projectName="Pytwe bot" link="http://github.com/alkesst/pytwebot" title="Another twitter bot"
        tryProject="http://twitter.com/pytwe_bot" image={pytwe}>
            This bot is currently tweeting the whole Quixote by Cervantes. A typical spanish literary work.
            Also it tweets every 21:35, 0:00, 3:14 and 4:20 their respective comments associated with that hours.
            It also reacts to some patterns such as "when te pasa".
        </Card>
        <Card projectName="Alkesst's page" link="http://github.com/alkesst/aslkesst.github.io" title="This page lol!"
        tryProject="#/projects">
            Is actually this page. Made with React, Redux and Bootstrap. Just a little page to let people know me and learn
            some JavaScript and its libraries.
        </Card>
        <Card projectName="ConsejoInfUma page" link="https://github.com/ConsejoInfUMA"
              title="Web page for the Council of students of the higher technical engineering school of computer science">
            I dont even know if "Council of students of the higher technical engineering school of computer science"
            is correct.
            The page is currently in a private repository and is under construction. I'm doing this project with some
            grade colleagues.
        </Card>
    </div>