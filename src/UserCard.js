import React from "react";
import {useState} from "react";

function UserCard({collaborator, currentUser}){

    const {name, bio, profile_pic} = collaborator
    const [btnState, setBtnState] = useState(false)

    const userProjects = currentUser.projects.map((project) => {
        return(
            <option>{project.title}</option>
        )
    })

    function onCollabBtnClick(){
        setBtnState(!btnState)
    }

    return(
        <>
        <div className="col-lg-4">
            <figure className="caption-2 mb-0 shadow-sm border border-white border-md">
                <img src={profile_pic} alt={name}/>
                <figcaption className="p-4 bg-white">
                    <h2 className="h5 font-weight-bold mb-2 font-italic">{name}</h2>
                    <p className="mb-0 text-small font-italic text-muted">{bio}</p>
                    <br></br>
                    <button onClick={onCollabBtnClick} className="btn btn-outline-dark btn-sm btn-block">Add Collaborator</button>
                    {btnState? 
                    <>
                    <br></br><select name="project_select" id="project_select">
                    {userProjects}
                    </select>
                    </>
                    : null}
                </figcaption>
            </figure>
        </div>
        </>
    )
}

export default UserCard;