import React from "react";
import {useState} from "react";

function UserCard({collaborator, currentUser, projCollabArray, setProjCollabArray, API}){

    const {name, bio, profile_pic, id} = collaborator
    const [btnState, setBtnState] = useState(false)
    const [thisCollabId, setThisCollabId] = useState("")
    const [thisProjectId, setThisProjectId] = useState("")
    

    const userProjectSelect = currentUser.projects.map((project) => {
        return(
            <>
            <option>{project.title}</option>
            </>
        )
    })

    function handleProjSelect(e){
        console.log(e.target.value)
        console.log(currentUser.projects)
        currentUser.projects.map((project) => {
            if(project.title === e.target.value){
                console.log(project.id)
                setThisProjectId(project.id)
            }
        })
        setThisCollabId(id)
        // console.log(thisCollabId)
        // console.log(thisProjectId)
    }

    function onAddCollab(e){
        e.preventDefault()
        const collabObj = {user_id: thisCollabId, project_id: thisProjectId}
        fetch (`${API}/collaborators`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(collabObj)
        })
        .then(r => r.json())
        .then(data => {
            setProjCollabArray([...projCollabArray, data])
            // ***CLEAR INPUT FIELDS***
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
                    <button onClick={onCollabBtnClick} className="btn btn-outline-dark btn-sm btn-block">Add Collaborator</button>
                    {btnState? 
                    <>
                    <form onSubmit={onAddCollab}>
                    <br></br><label for="project_select">Invite Collaborator to:</label>
                    <select onChange={handleProjSelect} name="project_select" id="project_select" >
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