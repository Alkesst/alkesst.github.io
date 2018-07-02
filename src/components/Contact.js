import React from 'react';
import octocat from '../Octocat.png';
import twitter from '../twitterLogo.png';
import contact from '../styles/contact.css';
import gmail from '../gmailLogo.png';
import telegram from '../telegramLogo.png';
import linkedIn from '../linkedInLogo.png';
import lastFm from '../lastfmLogo.png';

const Card = ({ imgUrl, text, link, description }) => <div className="col-12 col-sm-2" id="contact">
    <div className="card">
        <a href={link} target="_blank" className="btn btn-outline-dark" rel="noopener noreferrer" id="contact" style={contact}>
            <div className="square">
                <div className="square-content">
                    <img className="card-img-top" src={imgUrl} alt={description}/>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text">{text}</p>
            </div>
        </a>
    </div>
</div>;

export default () =>
    <div style={contact}>
        <h1 className="text-center">
            Contact
        </h1>
        <h2>Feel free to contact me at any time!</h2>
        <div className="row">
            <Card imgUrl={octocat} text="GitHub" link="http://www.github.com/alkesst" description="GitHub octocat"/>
            <Card imgUrl={twitter} text="Twitter" link="http://twitter.com/ksgamad" description="Twitter logo"/>
            <Card imgUrl={gmail} text="Gmail" link="mailto:alec.augal@gmail.com" description="Gmail logo"/>
            <Card imgUrl={telegram} text="telegram" link="https://telegram.me/alkesst" description="Telegram logo"/>
            <Card imgUrl={linkedIn} text="linkedIn" link="https://es.linkedin.com/in/alejandro-garau-madrigal-54224114b"
                  description="LinkedIn Logo"/>
            <Card imgUrl={lastFm} text="LastFm" link="https://www.last.fm/user/A13k5G"
                description="Steam Logo"/>
        </div>
    </div>
