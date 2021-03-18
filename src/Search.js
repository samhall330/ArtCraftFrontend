import React from "react";

function Search(){
    return(
        <>
        <h5 class="display-4">Find Collaborators</h5>
        <div class="input-group">
        <div class="input-group-prepend">
          <button id="button-addon8" type="submit" class="btn btn-danger"><i class="fa fa-search"></i></button>
        </div>
        <input type="search" placeholder="Search by expertise, equipment, or software..." aria-describedby="button-addon8" class="form-control"/>
      </div>
      </>
    )
}

export default Search;