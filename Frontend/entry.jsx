import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import Home from './components/home';


const Root = () => {
  return (
    <div id='root'>
        <Home/>
    </div>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});
