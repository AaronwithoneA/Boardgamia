import React from 'react';

class GameIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='game-box'>
        <div className='rank-box'>
          {this.props.game.rank}
        </div>
        <div className='game-detail-box'>
          <div className='name-box'>
            {this.props.game.name}
          </div>
          <img className='thumbnail-box' src={this.props.game.thumbnail} />
        </div>
      </div>
    );
  }
}

export default GameIndexItem;
