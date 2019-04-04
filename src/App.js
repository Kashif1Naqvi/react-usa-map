// import React, { Component } from 'react';
// import USAMap from "react-usa-map";
 
// class App extends Component {
//   /* mandatory */
//   mapHandler = (event) => {
//     alert(event.target.dataset.name);
//   };
 
//   render() {
//     return (
//       <div className="App">
//         <USAMap onClick={this.mapHandler} />
//       </div>
//     );
//   }
// }
 
// export default App;
 

 
  // with optional props, App.js:


// import React, { Component } from 'react';
// // import './App.css'; /* optional for styling like the :hover pseudo-class */
// import USAMap from "react-usa-map";
 
// class App extends Component {
//   /* mandatory */
//   mapHandler = (event) => {
//     alert(event.target.dataset.name);
//   };
 
//   /* optional customization of filling per state and calling custom callbacks per state */
//   statesCustomConfig = () => {
//     return {
//       "NJ": {
//         fill: ['usa','pakistan','india','japan'],
//         clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
//       },
//       "NY": {
//         fill: "red",
//         title:"usa"
//       }
//     };
//   };
 
//   render() {
//     const a= <ReactCountryFlag code="us" svg />
//     const b =<ReactCountryFlag styleProps={{width: '20px',height: '20px',}}
          
//     />
//     return (
//       <div className="App">
//         <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} />
//       </div>
//     );
//   }
// }
 
// export default App;


import React,{Component} from 'react';
import {RadioSVGMap,USA,Taiwan}  from 'react-svg-map';
import 'react-svg-map/lib/index.css';


class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h1 align="center" >Usa Map</h1>
        <RadioSVGMap 
          map={USA} 
          className='svg-map' 
          role='none' 
          locationClassName='svg-map__location'
        />
        <h1 align="center" >Taiwan Map</h1>
        <RadioSVGMap 
          map={Taiwan} 
          className='svg-map' 
          role='none' 
          locationClassName='svg-map__location'
        />
      </div>
    );
  }
}
export default App;