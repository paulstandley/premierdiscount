import React, { Component } from 'react';
import styled from 'styled-components';

class Vappicks extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        
        <Main className="mainvap">

          <figure>
            <img src="https://res.cloudinary.com/pieol2/image/upload/v1550087882/ep0.jpg" width="280" hight="300" />
            <figcaption>Vap Pen 1</figcaption>
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/pieol2/image/upload/v1550087882/ep1.jpg" width="280" hight="300" />
            <figcaption>Vap Pen 2</figcaption>
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/pieol2/image/upload/v1550087899/ep2.jpg" width="280" hight="300" />
            <figcaption>Vap Pen 3</figcaption>
          </figure>

          <figure>
            <img src="https://res.cloudinary.com/pieol2/image/upload/v1550087910/ep3.jpg" width="280" hight="300" />
            <figcaption>Vap Pen 4</figcaption>
          </figure>

        </Main>

      </React.Fragment>
     );
  }
}

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  figure {
    border: thin #c0c0c0 solid;
    display: flex;
    flex-flow: column;
    padding: 5px;
    max-width: 220px;
    margin: auto;
  }
  img {
    max-width: 220px;
    max-height: 150px;
  }
  figcaption {
    background-color: #222;
    color: #fff;
    font: italic smaller sans-serif;
    padding: 3px;
    text-align: center;
  }
`

export default Vappicks;