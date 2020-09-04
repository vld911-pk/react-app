import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import state from './redux/state';
import {addPost,changeNewPostText} from './redux/state';


export let reRender = (props) =>{
ReactDOM.render(
  <React.StrictMode>
    <App appState = {props} addPost = {addPost} changeNewPostText = {changeNewPostText} newPostText = {props.newPostText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}
