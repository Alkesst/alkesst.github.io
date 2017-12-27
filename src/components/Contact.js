import React from 'react';
import octocat from '../Octocat.png';
import twitter from '../twitterLogo.png';
import contact from '../styles/contact.css';
import gmail from '../gmailLogo.png';

const Card = ({ imgUrl, text, link, description }) => <div className="col-4">
    <div className="card">
        <a href={link} target="_blank" rel="noopener noreferrer">
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
        <div className="row">
            <Card imgUrl={octocat} text="GitHub" link="http://www.github.com/alkesst" description="GitHub octocat"/>
            <Card imgUrl={twitter} text="Twitter" link="http://twitter.com/alkesstt" description="Twitter logo"/>
            <Card imgUrl={gmail} text="gmail" link="mailto:alec.augal@gmail.com" description="Gmail logo"/>
        </div>
    </div>
