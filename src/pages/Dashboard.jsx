import React from 'react';
import {Navbar, Search, Info, User, Repos} from '../components';
import { useGlobalContext } from '../context/context';
import Loader from '../assets/loader.gif'

const Dashboard = () => {
  const {loading}=useGlobalContext();

  if(loading){
    return (
      <div>
      <Navbar/>
      <Search/>
      <img src={Loader} alt="Loading..." className='spinner'/>
      </div>
    )
  }

  return (
    <div>
      <Navbar/>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </div>
  )
}

export default Dashboard