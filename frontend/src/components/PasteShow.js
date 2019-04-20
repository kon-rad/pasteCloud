import React, { Component } from 'react';
import PasteCloud from '../util/PasteCloud';
import TimeFormatter from '../util/TimeFormatter';

const pasteCloud = new PasteCloud();
const timeFormatter = new TimeFormatter();

class PasteShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paste: null
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    pasteCloud.getPastes(id).then(res => this.setState({ paste: res }))
  }

  renderPaste = () => {
    if (!this.state.paste) return;
    const { paste_title: title, paste_username: username, paste_text: text, paste_created: created, paste_modified: modified } = this.state.paste;
    console.log('render', this.state);
    return (
      <div className="paste_card">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{title} - {username}</span>
            {text}
          </div>
          <div className="card-action">
          created: {timeFormatter.getHuman(created)} modified: {timeFormatter.getHuman(modified)}
          </div>
        </div>
      </div>
    )
  }
  render() {

    return (
      <div className="row">
        {this.renderPaste()}
      </div>
    );
  }
}

export default PasteShow;
