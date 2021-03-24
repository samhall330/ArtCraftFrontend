import React from "react";
import {useState} from "react";
import UserCard from "./UserCard";

function Search({searchQuery, setSearchQuery, currentUser, users, projCollabArray, setProjCollabArray, API}){

  const [collabCardArray, setCollabCardArray] = useState([])

  function checkArray(array){
    let userAttribute = false
    array.map((spec) => {
      if (spec.name.includes(searchQuery)){
        userAttribute = true
      }
    })
    return userAttribute
  }

  function handleSearch(e){
    const collaboratorsArray = users.filter((user) => checkArray(user.specialties))
    // console.log(collaboratorsArray)
    setCollabCardArray(collaboratorsArray)
  }

  const collaborators = collabCardArray.map((collaborator) => {
    return (
      <div className="container py-5">
      <div className="row">
      <div className="col-lg-11 mx-auto">
      {currentUser && <UserCard collaborator={collaborator} key={currentUser.id} currentUser={currentUser} projCollabArray={projCollabArray} setProjCollabArray={setProjCollabArray}/>}
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
        <input onChange={(e) => setSearchQuery(e.target.value)} type="search" placeholder="Search by expertise..." aria-describedby="button-addon8" className="form-control"/>
      </div>

      {collaborators}
      </>
    )
}

export default Search;