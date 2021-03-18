import React from "react";

function Search(){
    return(
        <>
        <h5 className="display-4">Find Collaborators</h5>
        <div className="input-group">
        <div className="input-group-prepend">
          <button id="button-addon8" type="submit" className="btn btn-danger"><i className="fa fa-search"></i></button>
        </div>
        <input type="search" placeholder="Search by expertise, equipment, or software..." aria-describedby="button-addon8" className="form-control"/>
      </div>
      </>
    )
}

export default Search;