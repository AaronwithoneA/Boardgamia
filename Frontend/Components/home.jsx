import React from 'react';
import GameIndexItem from './game_index_item';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fetchHotGames = this.fetchHotGames.bind(this);
    this.state = {};
  }

  fetchHotGames() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://bgg-json.azurewebsites.net/hot');
    xhr.onload = () => {
      this.setState({games: JSON.parse(xhr.response)});
    };
    xhr.send();
  }

  componentDidMount  () {
    this.fetchHotGames();
  }

  render () {
    return (
      <div>
        {this.state.games ? this.state.games.map(game =>
          <GameIndexItem game = {game} />): ""}
      </div>
    );
  }
}

export default Home;
