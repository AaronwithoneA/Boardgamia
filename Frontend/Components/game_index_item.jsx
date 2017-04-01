import React from 'react';
import $ from 'jquery';
import {history} from 'react-router';

class GameIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.editDescription = this.editDescription.bind(this);
    this.gameLink = this.gameLink.bind(this);
  }

  gameLink (e) {
    e.preventDefault;
    history.push(`/games/${this.props.game.gameId}`);
  }

  fetchGameDetails () {
    return $.ajax({
      method: 'GET',
      url: `http://bgg-json.azurewebsites.net/thing/${this.props.game.gameId}`
    });
  }

  editDescription () {
    let description = "";
    if (this.state.gameDetails) {
      let desc = this.state.gameGetails.description;
      let charsToDelete = "&#10;";
      for(var i = 0; i < desc.length; i++) {
        if (charsToDelete.indexOf(desc[i]) === -1) {
          description.push(desc[i]);
        } else {
          continue;
        }
      }
    } else {
      description = "";
    }
  }

  componentDidMount  () {
    this.fetchGameDetails().then(res => {
       return this.setState({gameDetails: JSON.parse(res)});
    });
  }

  render () {
    let description = [];
    if (this.state.gameDetails) {
      let desc = this.state.gameDetails.description.split("");
      let charsToDelete = ["&", "#", "#", "1", "0", ";"];
      for(var i = 0; i < desc.length; i++) {
        if (charsToDelete.indexOf(desc[i]) === -1) {
          description.push(desc[i]);
        } else {
          continue;
        }
      }
      description = description.join("");
    } else {
      description = "";
    }

    return (
      <div className='game-box' onClick={this.gameLink}>
        <div className='rank-box'>
          {this.props.game.rank}
        </div>
        <div className='game-container'>
          <div className='game-overview-box'>
            <div className='name-box'>
              {this.props.game.name}
            </div>
            <img className='thumbnail-box' src={this.props.game.thumbnail} />
          </div>
          <div className='game-detail-box'>
            <div className='description-box'>
              {description}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default GameIndexItem;
