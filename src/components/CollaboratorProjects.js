import React from 'react';
import { Link } from 'react-router-dom';
import hw from '../resources/HackersWeek.png';
import youtubeAudio from '../resources/new.png';
import go4me from '../resources/go4me.jpg';
import { Card } from './ProjectCard';


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
        <div className="row">
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
            <Card projectName="Go4Me" link="https://github.com/alkesst/go4me" image={go4me}
                title="Like Glovo, but better">
                Go4Me is a web app which main target is to order errands to other users and pay them for bringing them to your home.
                This is a grade project made with Spring, Thymeleaf, Bootstrap & HTML5
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
    </div>