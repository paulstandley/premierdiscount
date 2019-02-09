import React, { Component } from 'react';

const ProuductContext = React.createContext();

class ProuductProvider extends Component {

  render() { 
    return ( 
      <ProuductContext.Provider value="hello form contextprovider">
        {this.props.children}
      </ProuductContext.Provider>
     );
  }

}

const ProuductConsumer = ProuductContext.Consumer;

export { ProuductProvider, ProuductConsumer };