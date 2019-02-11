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
              <Link to ="components/vap"><Button><li>vap store</li></Button></Link>
              <Link to ="components/shop"><Button><li>shop store</li></Button></Link>
              <Link to ="components/sunderys"><Button><li>suderys</li></Button></Link>
            </ol>
          </nav>
        </Headers>
      </React.Fragment>
     );
  }
}

const Headers = styled.header`
  padding: 0.8rem;
  text-align: center;
  color: var(--mainfontscolor);
  background-color: var(--mainheadercolor);
`

const Button = styled.button`
  background: transparent;
  border-radius: 9px;
  border: 2px solid var(--mainfontscolor);
  color: var(--mainfontscolor);
  margin: 0 1rem;
  padding: 0.25rem 1rem;
`

export default Header;