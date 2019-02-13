import React, { Component } from 'react';
import Displayvap from './Displayvap';
import { ProuductConsumer } from '../../context';

class Vap extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <ProuductConsumer>
          {(value) => {
            return (
              <section className="vap-section">
              <h2>Vap</h2>
              <button onClick={() => value.buttonHandeler()}>Click</button>
              <Displayvap />
            </section>
            );
          }}
        </ProuductConsumer>
      </React.Fragment>
     );
  }
}  

 
export default Vap;