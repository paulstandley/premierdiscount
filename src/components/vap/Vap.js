import React, { Component } from 'react';
import Displayvap from './Displayvap';
import { ProuductConsumer } from '../../context';
import styled from 'styled-components';
import { Buttons } from '../Buttons';

class Vap extends Component {
  state = { 
    isclicked: true
   }
  render() { 
    return ( 
      <React.Fragment>
        <ProuductConsumer>
          {(value) => {
            console.log(value);
            return (
            <Section className="vap-section">
              <h2>Vap</h2>
              <Buttons 
                onClick={() => value.buttonHandeler()}
                disabled={this.state.isclicked ? true : false}
                >Click</Buttons>
                {this.state.isclicked ? 'true' : 'false'}
                {value.prouduct.map(current => {
                  return (
                    <div key={current.id}>
                      <h4>{current.name}</h4>
                      <h4>{current.username}</h4>
                      <h4>{current.email}</h4>
                    </div>
                  );
                })}
              <Displayvap />
            </Section>
            );
          }}
        </ProuductConsumer>
      </React.Fragment>
     );
  }
}  

const Section = styled.section`
  background-color: var(--mainvapbgcolor);
  h2 {
    color: var(--mainfontscolor);
    text-align: center;
  }
`

export default Vap;