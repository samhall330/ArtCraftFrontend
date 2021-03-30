import React from "react";
import {useState, useEffect} from "react";
import UserCard from "./UserCard";
import './index.css';

function Search({searchQuery, setSearchQuery, currentUser, users, setUsers, projCollabArray, setProjCollabArray, API, projectsArray}){

  const [collabCardArray, setCollabCardArray] = useState([])

  useEffect(() => {
    fetch(`${API}/users`)
    .then(r => r.json())
    .then(data => {
      setUsers(data)
    })
  }, [])



  function checkArray(array){
    if(searchQuery == "" || " "){
      alert("Please enter a valid search term")
    } else {
    let userAttribute = false
    array.map((spec) => {
      if (spec.user_id != currentUser.id && spec.name.toLowerCase().includes(searchQuery.toLowerCase())){
        userAttribute = true
      }
    })
    return userAttribute
  }}

  function handleSearch(e){
    const collaboratorsArray = users.filter((user) => checkArray(user.search_array))
    setCollabCardArray(collaboratorsArray)
  }

  const collaborators = collabCardArray.map((collaborator) => {
    return (
      <div className="container py-5">
      <div className="row">
      <div className="col-lg-11 mx-auto">
      {currentUser && <UserCard collaborator={collaborator} key={currentUser.id} currentUser={currentUser} projCollabArray={projCollabArray} setProjCollabArray={setProjCollabArray} projectsArray={projectsArray}/>}
      </div>
      </div>
      </div>
    )
  })

    return(
        <>
        <h5 className="display-4">Find Collaborators</h5>
        <div className="input-group">
        <div className="input-group-prepend">
          <button onClick={handleSearch} id="button-addon8" type="submit" className="btn btn-danger"><i className="fa fa-search"></i></button>
        </div>
        <input onChange={(e) => setSearchQuery(e.target.value)} type="search" placeholder="Search by user expertise, equipment, or software..." aria-describedby="button-addon8" className="form-control"/>
      </div>

      {collaborators}
      </>
    )
}

export default Search;