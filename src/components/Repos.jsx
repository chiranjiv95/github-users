import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import { Pie3D} from './charts';


const Repos = () => {
  const {repos}=useGlobalContext();
  console.log(repos);
  // reduce method for languages
  let languages= repos.reduce((total, item)=>{
    const {language}=item;
    if(!language){
      return total;
    }
    if(!total[language]){
      total[language]={label:language, value:1};
    }else{
      total[language]={...total[language], value:total[language].value+1};
    }
    return total;
  },{})
  
  console.log('after reduce: ' + languages);
  languages=Object.values(languages).sort((a,b)=>{
    return b.value - a.value;
  }).slice(0, 5);

  console.log(languages);
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={languages}/>

      </Wrapper>
    </section>
  )
};

const Wrapper=styled.div`
  display:flex;
  justify-content:center;
`;

export default Repos