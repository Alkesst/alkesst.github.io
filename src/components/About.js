import React from 'react';
import aboutStyle from '../styles/about.css';
import photo1 from '../resources/profPhoto1.jpg';
import photo2 from '../resources/profPhoto2.jpg';

export default () =>
    <div className='row' style={aboutStyle} id='about'>
        <div className='col-6'>
            <img src={photo1} className='img-fluid' alt='img not found' title=''/>
        </div>
        <div className='col-6' id='text' style={aboutStyle}>
            <div className="d-flex align-items-center">
                <div>
                    <h1>About me</h1>
                    <p>
                        My name is Alejandro but my friends call me whatever they want. I'm 20 years old and I was born in Palma
                        de Mallorca, Balearic Islands. Nowadays I'm living in Antequera, Málaga.
                    </p>
                </div>
            </div>
        </div>
        <div className='col-6' id="about" style={aboutStyle}>
            <p>
                I moved to Málaga in 2016 to study in the university and I'm currently studying my second year
                of Software Engineering at the University of Málaga.
            </p>
        </div>
        <div className='col-6'>
            <p>
                Apart from programming I also like to play some videogames such as Starcraft 2 or Hearthstone and in my
                spare time I usually play the electric guitar.
            </p>
        </div>
        <div className='col-12'>
            <p>
                Besides that, I were collaborating with
                the <a href="https://twitter.com/ConsejoInfUma" target="_blanck" rel="noopener noreferrer">
                    Students Council of the Higher School of Computer Engineering</a>
                , making events such as
                the <a href="https://twitter.com/HackersWeek" target="_blankc" rel="noopener noreferrer">
                    HackersWeek
                </a> and little workshops like Raspberry Pi tutorials for rookies.
            </p>
        </div>
        <div className="align-items-center" id='bigOne' style={aboutStyle}>
            <h3>And that's all!</h3>
            <img src={photo2} className='img-fluid' alt='img not found' title='Nice foto bro'/>
            <p className="text-center"> Photo
                by <a href="https://www.facebook.com/FotosBarbas/" target="_blank"
                rel="noreferrer noopener">Borja Sánchez Cerro</a></p>
        </div>
    </div>