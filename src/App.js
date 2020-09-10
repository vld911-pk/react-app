import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import Aside from './components/Aside/Aside';
import Dialogs from './components/Dialogs/Dialogs';
import Weather from './components/Weather/Weather';
import {BrowserRouter,Route} from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
        <div className = "app-wrapper">
            <Header />
            <Aside />
                  <div className = "content-wrapper border">
                      <Route path = '/dialogs' render = {()=><Dialogs dialogs = {props.appState.dialogsPersonData} messages = {props.appState.dialogsMessageData}/>}/>
                      <Route path = '/content' render = {()=><Content posts = {props.appState.posts} addPost = {props.addPost} changeNewPostText = {props.changeNewPostText} newPostText = {props.newPostText}/>}/>
                      <Route path = '/weather' render = {()=><Weather api = {props.appState.weatherData.API_KEY}/>}/>
                  </div>
            <Footer />
        </div>
   </BrowserRouter>
  );
}
export default App;
