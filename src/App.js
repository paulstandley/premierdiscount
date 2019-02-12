import React, { Component } from 'react';
import { ProuductConsumer } from './context';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
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
          <Route path="/components/vap/Vap" component={Vap} />
          <Route path="/components/sunderys/Sunderys" component={Sunderys} />
          <Route path="/components/shop/Shop" component={Shop} />
        </Switch>
      </React.Fragment>
     );
  }
}
 
export default App;