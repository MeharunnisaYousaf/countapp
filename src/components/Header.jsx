import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src= 'https://i.pinimg.com/736x/1e/10/3c/1e103c1d0cd605cd7be5f0739bcf6475.jpg'
              height='50'
              alt=''
              loading='lazy'
            />
            <strong>CounterApp</strong>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      
    </div>
  )
}

export default Header