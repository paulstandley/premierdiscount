import React, { Component } from 'react';

const ProuductContext = React.createContext();

class ProuductProvider extends Component {

  state = {
    prouduct: []
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return this.setState({
        prouduct: json
      })
    })
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