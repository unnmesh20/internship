import React, { useState, useEffect } from "react";
import axios from "axios";

const gitHubUrl = "https://api.github.com/users/example";

const Github1 = () => {
  const [userData, setUserData] = useState({});
  const [userInput, setUserInput] = useState({});
  //     useEffect(()=>{
  //        getUserWithAxios();

  //    },[]);
  //   let response = "";

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  /* const getUserWithAxios = async () => {
      let response = await axios.get(`https://api.github.com/users/${userInput}`);
      console.log(response);
     setUserData(response.data);
     console.log(response.data);
    }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    // debugger;
    axios.get(`https://api.github.com/users/${userInput}`).then((response) => {
      setUserData(response.data);
      console.log(response.data);
      // console.log(userData.avatar_url);
    });
  };
  return (
    <div className="GithubApp">
      <h2 className="heading">GITHUB USER DATA
      <img className="image" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-512.png" alt=""/></h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-field col s4">
          <input  type="text " className="input-item" onChange={handleSearch} />
          </div>
          <button className= " button btn waves-effect waves-light" type="submit" name="action"><i className="material-icons right"></i>Search</button>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col s12 m7">
            <div className="card card-info">
              <div className="card-image">
                <img
                  className="image-git"
                  src={userData.avatar_url}
                  style={{ height: "300px", width: "300px" }}
                />
                
              </div>
              <div className="card-content " >
                <p>
                <p>User Name: {userData.name}</p>
                  <p>Id of the user: {userData.id}</p>
                  <p>Number of public repos: {userData.public_repos}</p>
                  <p>Number of followers: {userData.followers}</p>
                  <p>Following Number: {userData.following}</p>
                </p>
              </div>
              <div className="card-action">
                <a href={userData.html_url}>LINK TO REPO</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Github1;
