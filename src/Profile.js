import React from "react";

function Profile({currentUser}){
    return(
        <h1>Hi, {currentUser.name}</h1>
    )
}

export default Profile;