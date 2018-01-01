import React, { Component } from 'react';
import demo1 from '../resources/Dev-Chat demo.png';
import demo2 from '../resources/Dev-Chat demo2.png';
import demo3 from '../resources/Dev-Chat demo3.png';
import demo4 from '../resources/Dev-Chat.png';

class DevChat extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div>
                <h1>Dev-Chat</h1>
                <h5 className="text-justify">What is Dev-Chat?</h5>
                <p className="text-justify">
                    DevChat is a console network chat created using C and SSL. The chat is composed by a server and a
                    client.
                    The server receives all the messages from the users, and sends them to all the other users.
                    The client is a console app that prints all the messages received and send cyphered messages from the
                    users.
                    If you want to join a server you must have the public certificate provided by the host, and
                    on the other hand, the server requires having a public and private certificate.
                </p>
                <h5 className="text-justify">Why a chat?</h5>
                <p className="text-justify">
                    Simply, I was bored studying the subjects of my degree, so I decided, along with my brother, making this
                    Chat.
                    Just for fun and learning how a network works.
                </p>
                <h5 className="text-justify">Why SSL?</h5>
                <p className="text-justify">
                    When we created the chat we used Wireshark to capture the packets the chat was sending to the router.
                    Then my brother show me the content of the packets, and we could read the messages we were sending.
                    So, I thought, "Hey, why do not we cypher the packets sent by the chat?" And that's it.
                </p>
                <h5 className="text-justify">Why did you used C?</h5>
                <p className="text-justify">
                    Same as before, because I wanted to learn a new programming language and, in that year I was going to
                    use
                    this language.
                </p>
                <h5 className="text-justify">How it works?</h5>
                <p className="text-justify">
                    Is not very complicated. The server requests an username and the client will send the username.
                    Once done this, the app is like a common chat.
                </p>
                <h5 className="text-justify">What's next?</h5>
                <p className="text-justify">
                    A desktop app for macOs and Linux :)
                </p>
                <h2>Demo time!</h2>
                <p className="text-justify">Here are some images showing the basic behaviour of the chat</p>
                <img src={demo4} alt="demo4"/>
                <p>This is the user view</p>
                <img src={demo3} alt="demo3"/>
                <p>This is how the server looks like</p>
                <img src={demo2} alt="demo2"/>
                <p>This is the user view when the server shuts down</p>
                <img src={demo1} alt="demo1"/>
                <p>This is the server view when an user leaves</p>
            </div>
        );
    }
}

export default DevChat;
