import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";

function UserCard({collaborator, currentUser, projCollabArray, setProjCollabArray, API, projectsArray}){

    const history = useHistory()
    const {name, bio, profile_pic, id, specialties} = collaborator
    const [btnState, setBtnState] = useState(false)
    const [thisCollabId, setThisCollabId] = useState("")
    const [thisProjectId, setThisProjectId] = useState("")
    

    const userProjectSelect = projectsArray.map((project) => {
        if(project.user_id === currentUser.id){
        return(
            <>
            <option>{project.title}</option>
            </>
        )}
    })

    function handleProjSelect(e){
        projectsArray.map((project) => {
            if(project.title === e.target.value){
                setThisProjectId(project.id)
            }
        })
        setThisCollabId(id)
    }

    function onAddCollab(e){
        e.preventDefault()
        const collabObj = {user_id: thisCollabId, project_id: thisProjectId}
        fetch (`http://localhost:3000/collaborators`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(collabObj)
        })
        .then(r => r.json())
        .then(data => {
            setProjCollabArray([...projCollabArray, data])
            history.push(`/projects/${thisProjectId}`)
        })

    }

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
                    <p className="mb-0 text-small font-italic text-muted"></p>
                    <br></br>
                    <button onClick={onCollabBtnClick} className="btn btn-outline-dark btn-sm btn-block">Add Collaborator</button>
                    {btnState? 
                    <>
                    <form onSubmit={onAddCollab}>
                    <br></br><label for="project_select">Invite Collaborator to:</label>
                    <select onChange={handleProjSelect} value="" name="project_select" id="project_select" >
                    <option>Select Project:</option>
                    {userProjectSelect}
                    </select>
                    <br></br>
                    <input type="submit" value="Add"></input>
                    </form>
                    </>
                    : null}
                </figcaption>
            </figure>
        </div>
        </>
    )
}

export default UserCard;