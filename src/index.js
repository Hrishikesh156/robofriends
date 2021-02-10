import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import Card from './Card';
import 'tachyons';
// import CardList from './CardList';
//import {robots} from './robots'; //since its not default
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// ReactDOM.render(
 
//   <React.StrictMode>
//   <App />
// </React.StrictMode>,
// document.getElementById('root')
// );