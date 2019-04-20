import React, { Component } from 'react';
import PasteCloud from '../util/PasteCloud';

const pasteCloud = new PasteCloud();

class PasteCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paste_text: null,
      paste_username: null,
      paste_title: null,
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    pasteCloud
        .postPaste(this.state)
        .then(res => {
            console.log('res', res);
            if (!res) return; // todo: implement error message
            this.props.history.push(`/pastes/${res.paste_id}`)
        });
  };
  render() {
    return (
      <div className="PasteCreate">
          <div className="main__wrPasteCreateer">
            <form onSubmit={this.handleSubmit}>
                <textarea autoComplete="off" onChange={this.handleChange} name="paste_text" placeholder="paste your content here" className="main__paste" />
                <input autoComplete="off" onChange={this.handleChange} name="paste_username" placeholder="Usermame" className="main__username" />
                <input autoComplete="off" onChange={this.handleChange} name="paste_title" placeholder="Paste title - hit Enter to submit" className="main__filename" />
                <input className="waves-effect waves-light btn" type="submit" name="submit" value="Submit" />
            </form>
          </div>
      </div>
    );
  }
}

export default PasteCreate;
