import React ,{useState, useEffect} from 'react';
import './Weather.css';

// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//           );
//     }
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     tick() {
//         this.setState({
//           date: new Date()
//         });
//       }
//     render() {
//       return (
//         <div>
//           <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }

// function Clock2(){
//     let [time,setTime] = useState(new Date());


//     useEffect(()=>{
//       setInterval(()=> setTime(new Date),1000);
//     },[])
     
   
//     return (
//             <div>
//                   <h2>Сейчас {time.toLocaleTimeString()}.</h2>
//             </div>
//     );
// }
// function Fetcher(){

// let [gitData,setGitData] = useState('nothing');

//   useEffect(()=>{
//     fetch('https://api.github.com/users/vld911-pk')
//     .then((result) => result.json())
//     .then((json) => setGitData(json))
//   });
//       return (
//       <pre>{JSON.stringify(gitData,null,2)}</pre>
//       )
// }
class Fetcher extends React.Component{
  constructor(props){
    super(props)
    this.state = {gitData : 'nothing'}
  }
  componentDidMount(){
    this.task();
  }
  async task(){
    
     let response = await  fetch('https://api.github.com/users/vld911-pk')
     let json  = await response.json();
     return this.setState({gitData : json});
   
  }
  render(){
    return (
    <pre>{JSON.stringify(this.state.gitData,null,2)}</pre>
    )
  }

}
function Weather(){  
  return  (
      <Fetcher />
  );
}

export default Weather;






















 {/* <div>
                    <p>Weather</p>
                </div> */}