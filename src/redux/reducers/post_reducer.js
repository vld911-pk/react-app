const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export const postReducer = (state ,action) =>{  

    if(action.type === 'ADD-POST'){
        console.log('mess',action.postData);
        let newPost = {
            id:5,
            message: action.mess,
            src:"https://i.pinimg.com/originals/7b/aa/25/7baa252dbdfeed669c152bedd2fa5feb.jpg"
          }
          state.push(newPost);
      }else if(action.type === 'UPDATE-NEW-POST-TEXT'){
          state.newPostText = action.txt;
      }
    return state;
}
export const addPostAction = (text) =>{
    return {
      type : ADD_POST,
      mess : text
    }
  }
export const updateNewPostAction = (text) =>{
    return {
      type : UPDATE_NEW_POST_TEXT,
      txt : text 
    }
} 