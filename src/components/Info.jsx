import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import {FiUsers, FiUserPlus} from 'react-icons/fi';
import {GoRepo, GoGist} from 'react-icons/go';

const Info = () => {
    const {githubUser}=useGlobalContext();
    const {public_repos, followers, following, public_gists}=githubUser;

    const items = [
        {id:1, icon:<GoRepo className='icon'/>, title:'Repos', value:public_repos},
        {id:2, icon:<FiUsers className='icon'/>, title:'Followers', value:followers},
        {id:3, icon:<FiUserPlus className='icon'/>, title:'Following', value:following},
        {id:4, icon:<GoGist className='icon'/>, title:'Gists', value:public_gists},
    ];

  return (
    <section className='section'>
     <Wrapper className='section-center'>
        {
            items.map((item)=>{
                return <Item {...item} key={item.id}/>
            })
        }
     </Wrapper>
    </section>
  )
};

// Item component
const Item=({id, icon, title, value})=>{
    return <article className='item'>
       <span>{icon}</span>
       <div>
        <h3>{value}</h3>
        <p>{title}</p>
       </div>
    </article>
};


const Wrapper=styled.section`
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));
    gap:1rem 2rem;

    .item
    {
        padding:1rem 2rem;
        background:white;
        display:grid;
        grid-template-columns:auto 1fr;
        column-gap:3rem;
        align-items:center;

        span{
            border-radius:50%;
        }
         .icon{
            font-size:1.5rem;
        }
    }
`;

export default Info