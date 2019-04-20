import React, { Component } from 'react';
import PasteCloud from '../util/PasteCloud';
import TimeFormatter from '../util/TimeFormatter';

const pasteCloud = new PasteCloud();
const timeFormatter = new TimeFormatter();

class PasteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null
    }
  }

  componentDidMount() {
    pasteCloud.getAllPastes().then(res => {
      if (!res) return;
      this.setState({ list: res.data })
    });
  }

  renderList = () => {
    if (!this.state.list) return;
    return this.state.list.map(item => {
      return (
          <li key={item.paste_id} className="collection-item">
            <div>
              {item.paste_title} - {timeFormatter.getHuman(item.paste_created)}
              <a href={`/pastes/${item.paste_id}`} className="secondary-content">View</a>
            </div>
          </li>
      );
    })
  }

  render() {
    return (
      <ul className="collection with-header">
        <li className="collection-header"><h4>Recently added:</h4></li>
        {this.renderList()}
      </ul>
    );
  }
}

export default PasteList;
