import React, { Component } from 'react';
import Vappicks from './Vappicks';

class Displayvap extends Component {
  state = {  }
  render() { 
    console.log(this.props);
    return ( 
      <React.Fragment>
        {this.props.length === 0 ? <h3>no data</h3> : <Vappicks />}
      </React.Fragment>
     );
  }
}
 
export default Displayvap;