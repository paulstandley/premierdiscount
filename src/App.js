import React, { Component } from 'react';
import { ProuductConsumer } from './context';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Shop from './components/shop/Shop';
import Sunderys from './components/sunderys/Sunderys';
import Vap from './components/vap/Vap';
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
        <Switch>
          <Route exact path="/vap/Vap" Component={Vap} />
          <Route exact path="/sunderys/Sunderys" Component={Sunderys} />
          <Route exact path="/shop/Shop" Component={Shop} />
        </Switch>
      </React.Fragment>
     );
  }
}
 
export default App;