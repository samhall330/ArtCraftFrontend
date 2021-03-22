import React from "react";

function UserCard({collaborator}){

    const {name, bio, profile_pic} = collaborator

    return(
        <>
        <div className="col-lg-4">
            <figure className="caption-2 mb-0 shadow-sm border border-white border-md">
                <img src={profile_pic} alt={name}/>
                <figcaption className="p-4 bg-white">
                    <h2 className="h5 font-weight-bold mb-2 font-italic">{name}</h2>
                    <p className="mb-0 text-small font-italic text-muted">{bio}</p>
                </figcaption>
            </figure>
        </div>
       </>
    )
}

export default UserCard;