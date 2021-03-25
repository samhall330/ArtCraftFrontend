// import userEvent from "@testing-library/user-event";
import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import './user-card.css';

function UserCard({collaborator, currentUser, projCollabArray, setProjCollabArray, API, projectsArray}){

    const history = useHistory()
    const {name, bio, profile_pic, id} = collaborator
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

    const specName = collaborator.specialties.map((spec) => {
        return(
            <li>{spec.name}</li>
            )
    })
    // console.log(specname)


    // const specialtiesList = specialties.map((spec) =>{
    //     return(
    //         <li>{spec.name}</li>
    //     )
    // })
    // console.log(specialtiesList)

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
        <figure class="snip0064 red">
            <figcaption>
                <p>{specName}</p>
                <h2>{name}</h2><span class="position">{bio}</span>
            </figcaption>
            <div class="image"><img src={profile_pic} alt={name}/></div>
            <a href="#"></a>
        </figure>
        <button onClick={onCollabBtnClick} className="">Add Collaborator</button>
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
        
        </>

    )
}

export default UserCard;