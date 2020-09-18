import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import App from './App';



 let reRender = (state) =>{
    ReactDOM.render(
      <React.StrictMode>
        <App appState = {store.getState()} 
            addPost = {store.addPost.bind(store)} 
            changeNewPostText = {store.changeNewPostText.bind(store)} 
            newPostText = {store.newPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
reRender(store.getState());

store.subscribe(reRender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
