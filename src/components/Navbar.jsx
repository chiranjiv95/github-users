import React from 'react'
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const Navbar = () => {

  const {resetDashboard}=useGlobalContext();
  const {isAuthenticated,logout, isLoading, user}=useAuth0();

  return (
    <Wrapper>
      <div >
        <Link to='/' className='brand'><h2 onClick={resetDashboard}>Github Users App</h2></Link>
      </div>
      <div className='login-info'>
        <h4 className='username'>
          Welcome, {user?.name.toUpperCase() || 'Please login'}
         </h4>
        {
          isAuthenticated && user && <button onClick={()=>{logout({returnTo:window.location.origin})}} className='btn'>
          Logout
          </button>
        }
      </div>
        
        
    </Wrapper>
  )
};

const Wrapper=styled.nav`
  padding:1.5rem 0;
  padding-left:130px;
  padding-right:130px;
  
  margin-bottom:4rem;
  background:white;
  text-align:center;
  display:flex;
  align-items:center;
  justify-content:space-between;

  .login-info{
    display:flex;
    align-items:center;
    justigy-content:space-evenly;

    .username{
      margin-right:16px;
    }
  }
  .brand{
    text-decoration:none;
    cursor:pointer;
    color: rgb(11, 159, 110);
  }
`;

export default Navbar