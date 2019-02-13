import React, { Component } from 'react';

class Displayvap extends Component {
  state = {  }
  render() { 
    console.log(this.props);
    return ( 
      <React.Fragment>
        {this.props.length !== 0 ? <h3>no data</h3> : <h3>data</h3>}
        <p>vap picks</p>
      </React.Fragment>
     );
  }
}
 
export default Displayvap;