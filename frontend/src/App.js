import React, { Component } from 'react';
import axios from 'axios';
import PasteCloud from './util/PasteCloud';

const pasteCloud = new PasteCloud();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paste: null,
            username: null,
            pastetitle: null,
        }
    }

    handleChange = (e) => {
        console.log(e.target, this.state);
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        console.log(e, this.state);
        e.preventDefault();
        const paste = this.state;
        pasteCloud.postPaste(paste).then(console.log);
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
                        <form onSubmit={this.handleSubmit}>
                            <textarea autoComplete="off" onChange={this.handleChange} name="paste" placeholder="paste your content here" className="main__paste"></textarea>
                            <input autoComplete="off" onChange={this.handleChange} name="username" placeholder="Usermame" className="main__username" />
                            <input autoComplete="off" onChange={this.handleChange} name="pastetitle" placeholder="Paste title - hit Enter to submit" className="main__filename" />
                            <input className="waves-effect waves-light btn" type="submit" name="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
