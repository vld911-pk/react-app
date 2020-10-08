    import React from 'react';
    import s from './Dialogs.module.css';
    import {NavLink ,Route, BrowserRouter} from 'react-router-dom';
    import {addNewMessage} from '../../redux/reducers/dialogMess_reducer';

    const DialogItem = (props) =>{
        let path = "/dialogs/" + props.id;
        return (
            <div className = {s.dialog}>
                <NavLink to = {path}><img className = {s.dialogImg} src = {props.src} /> {props.name}</NavLink> 
            </div>
        );
    }
    const Message = (props) =>{
        return (
            <div className = {s.message}>
                    {props.message}    
            </div>
        );
    }

    const Dialogs = (props) =>{
    let newD = React.createRef(); 

    function messageValue(){
        let text = newD.current.value;
        let action = addNewMessage(text);
        console.log(action);
        props.dispatch(action);
        newD.current.value = '';
    }

    let dialogsRender = props.dialogs.map(item  =>  <DialogItem  src = {item.src} name = {item.name} id = {item.id}/>);
    let messageRender = props.messages.map(item =>  <Message message = {item.message}/>);
    
    
        return (
            <div className = {s.dialogs}>
                <div className = {s.dialogsItems}>
                    {dialogsRender}
                </div>
            <div className = {s.messages}>
                    {messageRender}
            </div>
                <div><textarea ref = {newD}></textarea></div><br />
                <button className = {s.messButt} onClick = {messageValue}>add message</button>
            </div>
        );
    }

    export default Dialogs;
