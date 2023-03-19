import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import {MdBusiness, MdLink, MdLocationOn} from 'react-icons/md'

const Card = () => {
  const {githubUser}=useGlobalContext();
  const {avatar_url:image, html_url:follow_link, name, company, blog, bio, location}=githubUser;

  return (
    <Wrapper>
      <p className='title'>user</p>
      <header>
        <img src={image} alt={name}/>
        <div>
          <h4>{name}</h4>
        </div>
        <a href={follow_link}>follow</a>
      </header>
      <p className='bio'>{bio}</p>
      <div className='links'>
        <p><MdBusiness /> {company}</p>
        <p><MdLocationOn /> {location || 'earth'}</p>
        <a href={`https://${blog}`}><MdLink/> {blog}</a>
      </div> 
    </Wrapper>
  )
}

const Wrapper=styled.div`
  background:white;
  width:48%;
  padding:1rem 2rem;
  display:grid;

  position:relative;

  .title{
    position:absolute;
    top:0;
    left:0;
    transform: translateY(-100%);
    background:white;
    padding:0 1.2rem;
    padding-top:0.5rem;
  }
  header{
    display:grid;
    grid-template-columns:auto 1fr auto;
    align-items:center;
    column-gap:1rem;
    margin-bottom:1rem;

    img{
      width:75px;
      heigh:75px;
      border-radius:50%;
    }
    a{
      border:2px solid cyan;
      border-radius:16px;
      padding:0.5rem 1rem;
      text-decoration:none;
      background:white;
      letter-spacing:0.1rem;
      font-size:0.8rem;
      pointer:cursor;
    }
    a:hover{
      background:cyan;
    }
  }
  .bio{
    margin-bottom:1rem;
  }
 .links{
   p, 
   a {
    display:flex;
    align-items:center;
    svg{
      margin-right:0.5rem;
      font-size:1.5rem;
    }
   }
 }
`;
export default Card