import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context/context'

const Followers = () => {
  const {followers}=useGlobalContext();

  return (
    <Wrapper>
      <p className='title'>Followers</p>
      <div className='followers'>
        {
          followers.length===0 && <h4 className='empty-list'>Followers list is empty</h4>
        }
       {
         followers.map((follower, index)=>{
          const {avatar_url:image, login:name, html_url:url}=follower;
           return (<article key={follower.id}>
            <img src={image} alt={name}/>
            <div>
               <h4>{name}</h4>
               <a href={url}>{url}</a>
            </div>
           </article>
           )
            
          })
       }
      </div>
    </Wrapper>
  )
};


const Wrapper=styled.div`
  background:white;
  width:48%;
  padding:1rem 2rem;

  
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
  .followers {
    overflow: scroll;
    height: 260px;
    padding: 1rem 2rem;

    .empty-list{
      position: absolute;
      left: 30%;
      top: 40%;
    }
  }
  article
  {
  display:grid;
  grid-template-columns:auto 1fr auto;
  align-items:center;
  column-gap:1rem;
  margin-bottom:1rem;

  img{
    width:40px;
    heigh:40px;
    border-radius:50%;
  }
  a{
    text-decoration:none;
    color:grey
  }

  }
`;

export default Followers