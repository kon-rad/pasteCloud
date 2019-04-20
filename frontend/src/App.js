import React, { Component } from 'react';
import PasteCloud from './util/PasteCloud';
import jQuery from 'jquery';

const pasteCloud = new PasteCloud();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paste_text: null,
            paste_username: null,
            paste_title: null,
        }
    }

    componentDidMount() {
        var csrftoken = getCookie('csrftoken');
        this.config = {
            headers: { 'X-CSRFToken': csrftoken }
        };

        function getCookie(name) {
            var cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                var cookies = document.cookie.split(';');
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = jQuery.trim(cookies[i]);
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            console.log('cookieValue', cookieValue);
            return cookieValue;
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        console.log(e, this.state);
        e.preventDefault();
        pasteCloud.postPaste(this.state).then(console.log);
    }
    render() {
        return (
            <div className="App">
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                            <a href="#" className="brand-logo">Paste Cloud</a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/users">Users</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="main__wrapper">
                        <form onSubmit={this.handleSubmit} >
                            <textarea autoComplete="off" onChange={this.handleChange} name="paste_text" placeholder="paste your content here" className="main__paste"></textarea>
                            <input autoComplete="off" onChange={this.handleChange} name="paste_username" placeholder="Usermame" className="main__username" />
                            <input autoComplete="off" onChange={this.handleChange} name="paste_title" placeholder="Paste title - hit Enter to submit" className="main__filename" />
                            <input className="waves-effect waves-light btn" type="submit" name="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
