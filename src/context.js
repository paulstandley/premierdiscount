import React, { Component } from 'react';
import axios from 'axios';
import { Get } from 'react-axios';

const ProuductContext = React.createContext();

class ProuductProvider extends Component {

  state = {
    prouduct: [],
    buttons: false
  }

  componentDidMount() {

  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  }

  buttonHandeler = () => {
    console.log("button clicked");
  }

  render() { 
    return ( 
      <ProuductContext.Provider value={{
        ...this.state,
        buttonHandeler: this.buttonHandeler
      }}>
        {this.props.children}
      </ProuductContext.Provider>
     );
  }
}

const ProuductConsumer = ProuductContext.Consumer;

export { ProuductProvider, ProuductConsumer };