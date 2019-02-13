import React, { Component } from 'react';
import Displayvap from './Displayvap';

class Vap extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <section className="vap-section">
          <h2>Vap</h2>
          <button onClick={() => console.log(this.props)}>Click</button>
          <Displayvap />
        </section>
      </React.Fragment>
     );
  }
}
 
export default Vap;