import React, { Component } from 'react';
import { ProuductConsumer } from './context';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <React.Fragment>
        <Header />
        <ProuductConsumer>
        {value => {
          return (<h1>{value}</h1>);
        }}
        </ProuductConsumer>
      </React.Fragment>
     );
  }
}
 
export default App;