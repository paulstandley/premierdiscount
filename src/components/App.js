import React, { Component } from 'react';
import axios from './axios';

class App extends Component {

  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then(res => {
      console.log(res);
    })
  }
   

  render() { 
    return ( <div>done</div> );
  }

}

export default App;
