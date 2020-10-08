const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

export const dialogMessageReducer = (state ,action) =>{  

    if(action.type === 'SEND-NEW-MESSAGE'){
        let newMess = {
            id : 5,
            message : action.mess
          }
          state.push(newMess);
        
    }

    return state;
}
export const addNewMessage = (mess) =>{
    return {
      type : SEND_NEW_MESSAGE,
      mess : mess
    }
  }