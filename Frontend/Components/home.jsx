import React from 'react';
import $ from 'JQuery';
import GameIndexItem from './game_index_item';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fetchHotGames = this.fetchHotGames.bind(this);
    this.state = {};
  }

  fetchHotGames () {
    return $.ajax({
      method: 'GET',
      url: 'http://bgg-json.azurewebsites.net/hot'
    });
  }

  componentDidMount  () {
    this.fetchHotGames().then(res => {
      console.log(JSON.parse(res))
       return this.setState({games: JSON.parse(res)});
    })
  }

  render () {
      // const games = this.state.games ? this.state.games.map((game, idx) => {
      //   return <GameIndexItem name = {game.name} idx = {idx}/>;
      //     }
      //   ) : [];
    return (
      <div>
        {this.state.games ? this.state.games.map(game =>
          <GameIndexItem game = {game} />): ""}
      </div>
    );
  }
}

export default Home;
