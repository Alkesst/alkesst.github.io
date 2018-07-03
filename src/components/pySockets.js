import React, {Component} from 'react';
import { Link } from "react-router-dom";
import demo1 from '../resources/pySockets client.png';
import demo2 from '../resources/pySockets server.png'

class PySockets extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        function topFunction() {
            window.scrollTo(0,0);
        }

        return (
        <div>
            <button className="btn btn-outline-info" onClick={topFunction} id="myBtn" title="Go to top">Go Top!</button>
            <div className="row">
                <Link className="btn btn-outline-info text" id="button" to="/MyProjects">Go back!</Link>
            </div>
            <h1>pySockets</h1>
            <h5 className="text-justify">what is pySockets</h5>
            <p className="text-justify">in pySockets you will find a server and a client. A client connects
            to a server using TCP sockets and a Server listens a network and a port.</p>
            <h5 className="text-justify">Client</h5>
            <p className="text-justify">
                The client asks the user for a hostname and a port, it connects and then, it asks for an offset and, if the
                offset is not zero, it will ask for a string to cypher. If the offset is zero, it sends the offset to the server
                and closes the connection with the server.
            </p>
            <h5 className="text-justify">Server</h5>
            <p className="text-justify">
                The server creates a socket and begins to listen to the network <samp>0.0.0.0</samp> and the
                port <samp>12345</samp>. Enters in a infinite loop and accepts connections from clients, and sends
                a welcome message. Then, it waits until the client sends the offset and the string, following that, it
                cyphers it with the Caesar cypher method and sends the response to the client.
            </p>
            <h4>
                Example
            </h4>
            <img src={demo1} alt="demo1" width="100%"/>
            <p>Client sending info and receiving the cyphered message from server</p>
            <img src={demo2} alt="demo1" width="100%"/>
            <p>This is how the server looks like</p>
        </div>
        );
    }
}

export default PySockets;