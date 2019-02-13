import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = { 

   }
  render() {
     
    return ( 
      <React.Fragment>
        <Headers>
          <h1>Premeierdiscount</h1>
          <nav>
            <ol>
              <Link to ="components/vap/Vap"><Button><li>vap store</li></Button></Link>
              <Link to ="components/shop/Shop"><Button><li>shop store</li></Button></Link>
              <Link to ="components/sunderys/Sunderys"><Button><li>suderys</li></Button></Link>
            </ol>
          </nav>
        </Headers>
      </React.Fragment>
     );
  }
}

const Headers = styled.header`
  padding: 1rem 0.8rem;
  text-align: center;
  color: var(--mainfontscolor);
  background-color: var(--mainheadercolor);
  h1 {
    padding: 0 0 0.4rem 0;
    font-size: 2.2rem;
  }
  ol {
    display: flex;
    justify-content: space-around;
  }
  ol li {
    list-style-type: var(--mainlist);
  }
`

const Button = styled.button`
  background: transparent;
  border-radius: 9px;
  border: 2px solid var(--mainfontscolor);
  color: var(--mainfontscolor);
  padding: 0.5rem 4rem;
  cursor: pointer;
  transition: all 1s ease-in-out;
  &:hover {
    background-color: var(--mainfontscolor);
    color: var(--bodybgcolor);
    border: 2px solid var(--bodybgcolor);
  }
  &:focus {
    outline: none;
  }
`

export default Header;