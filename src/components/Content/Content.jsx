import React from 'react';
import {Myself} from './MyPosts/Experimental';
import {addPostAction,updateNewPostAction} from '../../redux/reducers/post_reducer';
import  s from './Content.module.css';
let Content = (props) =>{
let postElements = props.posts.map(item => <Myself  name = {item.name} src = {item.src} message = {item.message} age = {item.age}/>);
let newPostElement = React.createRef();

function addPost(){
    let text = newPostElement.current.value;
    console.log(text);
    let action = addPostAction(text);
    props.dispatch(action);
    newPostElement.current.value = '';  
}
function changetext(){
    let text = newPostElement.current.value;
    let action = updateNewPostAction(text);
    props.dispatch(action);
    
    
}
    return (
        <React.Fragment>
            <div>
                {postElements}
            </div>
            <div>
                <textarea ref = {newPostElement} onChange = {changetext} value = {props.newPostText}></textarea>
            </div>
            <div>
                <button onClick = {addPost}>Add post</button>
            </div>
        </React.Fragment>
    );
}
export default Content;