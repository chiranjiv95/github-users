import React, {useState} from 'react'
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const Search = () => {

  const {requests, error, searchGithubUser, loading}=useGlobalContext();
  const [user, setUser]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(user){
      searchGithubUser(user);
      setUser('');
    }
  };

  return (<section className='section'>
  
        <Wrapper className='section-center'>
          {
              error.show && <ErrorWrapper><p>{error?.msg}</p></ErrorWrapper>
          }
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <MdSearch/>
                    <input type='text' placeholder='enter github user...'
                    value={user} 
                    onChange={(e)=>setUser(e.target.value)}/>

                    {
                      requests.remaining>0 && !loading &&   <button type='submit' className='btn'>search</button>
                    }
                  
                </div>
            </form>
            <h3>requests : {`${requests.remaining} / ${requests.limit}`}</h3>
        </Wrapper>
    </section>
  )
};

const Wrapper=styled.div`
  position:relative;
  // display:grid;
  // gap:1rem 1.75rem;
  display:flex;
  align-items:center;
  justify-content:space-between;

  .form-control{
    width:1000px;
    background:white;
    display:grid;
    align-items:center;
    grid-template-columns:auto 1fr auto;
    column-gap:0.5rem;
    border-radius:5px;
    padding:0.5rem;

    input{
      border-color:transparent;
      letter-spacing:0.2rem;
      padding:0.25rem 0.5rem;
      outline:none;
    }
    button{
      border-radius:5px;
      border-color:transparent;
      padding:0.25rem 0.5rem;
      text-transform:capitalize;
    }
    svg{
      font-size:1.7rem;
    }
  }

  h3{
    font-weight:400;
  }
`;

const ErrorWrapper=styled.article`
 position:absolute;
 width:90vw;
 top:0;
 left:0;
 transform:translateY(-150%);
 text-transform:capitalize;

 p{
  color:red;
  letter-spacing:0.2rem;
  font-weight:700;
  font-size:0.8rem;
 }
`;

export default Search