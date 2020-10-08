import {postReducer} from '../redux/reducers/post_reducer';
import {dialogMessageReducer} from '../redux/reducers/dialogMess_reducer';
import {dialogPersonReducer} from '../redux/reducers/dialogPerson_reducer';

let store = {
  reRender : undefined,
  _state : {
      posts : [
        // {id:1 ,name : "Rick c137", src : "https://i.pinimg.com/originals/7b/aa/25/7baa252dbdfeed669c152bedd2fa5feb.jpg", message : "labbavabba-dubb-dub",age : "72"},
        // {id:2 ,name : "Rick c92",  src : "https://i.pinimg.com/originals/53/86/87/5386875923cea32298bd55fc4ba5db2f.jpg", message : "we're screwed up",age : "72"},
        // {id:3 ,name : "Rick c69",  src : "https://cdn.vox-cdn.com/thumbor/dHm90p5yFjsq_kwoULDIL0JR0v0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9432879/r_m_sauce.jpg",message :"Morty, where ru?",age: "72"}
      ],
      dialogsPersonData : [
        {id : 1,src : "https://upload.wikimedia.org/wikipedia/uk/thumb/9/9f/Eric_cartman_from_southpark.jpg/250px-Eric_cartman_from_southpark.jpg" ,name : 'Jason'}, 
        {id : 2,src : "https://upload.wikimedia.org/wikipedia/uk/thumb/9/9f/Eric_cartman_from_southpark.jpg/250px-Eric_cartman_from_southpark.jpg" ,name : 'Vaas'},
        {id : 3,src : "https://upload.wikimedia.org/wikipedia/uk/thumb/9/9f/Eric_cartman_from_southpark.jpg/250px-Eric_cartman_from_southpark.jpg" ,name : "Lisa"},
        {id : 4,src : "https://upload.wikimedia.org/wikipedia/uk/thumb/9/9f/Eric_cartman_from_southpark.jpg/250px-Eric_cartman_from_southpark.jpg" ,name : "Grant"}
      ],
      dialogsMessageData : [
        {id : 1,message : 'Hello'},
        {id : 2,message : "It's me"},
        {id : 3,message : "I was wondering"},
        {id : 4,message : "if after all thease years"}
      ],
      weatherData : {
         API_KEY : '6b52e5d16588230c0bf2a25d4385c817'
      },
    },
   
    newPostText : "input your message:",
   
    getState(){
      return this._state;
    },
    
    subscribe(observer) {
      this.reRender = observer;
    },
    
    dispatch(action){
      this._state.posts = postReducer(this._state.posts,action);
      this._state.dialogsMessageData = dialogMessageReducer(this._state.dialogsMessageData ,action);
      this._state.dialogsPersonData = dialogPersonReducer(this._state.dialogsPersonData,action);

      this.reRender();
    }
}


export default store;
