import React, { useState, useEffect } from "react";
import axios from "axios";

const gitHubUrl = "https://api.github.com/users/sumanthparepalli";

const Github = () => {
  const[userData,setUserData]=useState({});
  useEffect(()=>{
    getUserWithAxios();

  },[]);
  const getUserWithAxios=async ()=>{
    const response=await axios.get(gitHubUrl);
    setUserData(response.data);
    console.log(response.data);

  };
  return(
    <div className="GithubApp">
      <header className="GithubApp-header">
        <h2>GitHub User Data</h2>
      </header>
      <div className="user-container">
        <h5>{userData.id}</h5>
        <h5 className="info-item">{userData.login}</h5>
        <h5 className="info-item">{userData.url}</h5>
        <h5 className="info-item">{userData.public_repos}</h5>
      </div>
      </div>

  );
}
export default Github;
