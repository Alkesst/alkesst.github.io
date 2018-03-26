import React, {Component} from 'react';
import { Link } from "react-router-dom";

class DevChatDesktop extends Component {
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
            Ahí estamos
        </div>
        );
    }
}

export default DevChatDesktop;