import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {


    // axios.post('/user', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    handleSubmit = (e) => {
        console.log(e);
        e.preventDefault();

        // axios.post('/api/paste', {

        // })
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
                            <textarea placeholder="paste your content here" className="main__input"></textarea>
                            <input name="username" placeholder="User Name (create one or use existing)" className="main_username" />
                            <input name="filename" placeholder="File name - hit Enter to submit" className="main_filename" />
                            <input type="submit" name="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
