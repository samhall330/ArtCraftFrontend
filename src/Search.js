import React from "react";

function Search({searchQuery, setSearchQuery, currentUser, users}){

  function handleSearch(e){
    // console.log(users[0].specialties[0].spec_name)
    console.log(searchQuery)
    
  const collaboratorsArray = users.filter((user) => searchQuery.includes(user.specialties.spec_name))
  console.log(collaboratorsArray)

  }
    return(
        <>
        <h5 className="display-4">Find Collaborators</h5>
        <div className="input-group">
        <div className="input-group-prepend">
          <button onClick={handleSearch} id="button-addon8" type="submit" className="btn btn-danger"><i className="fa fa-search"></i></button>
        </div>
        <input onChange={(e) => setSearchQuery(e.target.value)} type="search" placeholder="Search by expertise, equipment, or software..." aria-describedby="button-addon8" className="form-control"/>
      </div>
      </>
    )
}

export default Search;