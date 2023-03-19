import React, {useContext, useEffect, useState} from "react";
import mockUser from './mockData.js/mockUser';
import mockFollowers from './mockData.js/mockFollowers';
import mockRepos from './mockData.js/mockRepos';

const rootUrl='https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider=({children})=>{
    const [githubUser, setGithubUser]=useState(mockUser);
    const [repos, setRepos]=useState(mockRepos);
    const [followers, setFollowers]=useState(mockFollowers);
    // request and loading
    const [requests, setRequests]=useState(0);
    const [loading, setLoading]=useState(false);
    // error
    const [error, setError]=useState({show:false, msg:''});


    // search github user
    const searchGithubUser=async(user)=>{
        setLoading(true);
        toggleError();
        const response=await fetch(`${rootUrl}/users/${user}`);
        if(response.status===200){
            const data=await response.json();
            setGithubUser(data);
            getFollowers(data.followers_url);
            getRepos(data.repos_url);
            
        }else{
            toggleError(true, 'User does not exist!');
        }
        checkRequest();
        setLoading(false)
    };

    // set followers
    const getFollowers=async(url)=>{
        const response=await fetch(url);
        const followers=await response.json();
        setFollowers(followers);
    };

    // set repos
    const getRepos=async(url)=>{
        const response=await fetch(url);
        const repos=await response.json();
        setRepos(repos)
    }
    // check remaining requests
    const checkRequest=async()=>{

        try {
            const response=await fetch(`${rootUrl}/rate_limit`);
            const data=await response.json();
            let {rate:{limit, remaining}}=data;

            setRequests({limit, remaining});
            if(remaining===0){
                toggleError(true, 'sorry, you have exceeded your hourly rate limit!')
            }
        } catch (error) {
            console.log(error);
        }
       
      
    }

    // toggle error
    const toggleError=(show=false, msg='')=>{
        setError({show, msg});
    };

    // reset dashboard
    const resetDashboard=()=>{
        setGithubUser(mockUser);
        setFollowers(mockFollowers);
        setRepos(mockRepos);
    }

    useEffect(()=>{
      checkRequest();
    },[])

    return <GithubContext.Provider value={{loading, githubUser, setGithubUser, repos, followers, requests, error, searchGithubUser, resetDashboard}}>{children}</GithubContext.Provider>
};


const useGlobalContext=()=>{
    return useContext(GithubContext);
};

export {useGlobalContext, GithubProvider};