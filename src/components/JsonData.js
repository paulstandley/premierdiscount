import React from 'react';
import axios from 'axios';

class JsonData extends React.Component {

  state = { 
    persons: []
  };

  componentDidMount = () => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/1`).then(res => {
      console.log(res);
      this.setState({
        persons: res.dat
      });
    })
  }
   

  render() { 
    return ( <div>{this.state.persons}</div> );
  }

}
 
export default JsonData;
