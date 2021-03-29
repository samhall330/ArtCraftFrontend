import React from "react";
import {useState, useEffect} from "react";
import{useParams, useHistory} from "react-router-dom";

function CollabProfile({API, currentUser, projectsArray, setProjectsArray, specialtyArray, equipmentArray, softwareArray, projCollabArray, setProjCollabArray}) {

    const params = useParams()
    const history = useHistory()
    const collab_id = params.id
    const [thisCollab, setThisCollab] = useState("")
    const [thisCollabId, setThisCollabId] = useState("")
    const [thisProjectId, setThisProjectId] = useState("")
    const [btnState, setBtnState] = useState(false)

     const userProjectSelect = projectsArray.map((project) => {
        if(project.user_id === currentUser.id){
        return(
            <>
            <option>{project.title}</option>
            </>
        )}
    })

    useEffect(() => {
        fetch(`${API}/users/${collab_id}`)
        .then(r => r.json())
        .then(data => setThisCollab(data))
    }, [])

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

    const {id, name, bio, profile_pic} = thisCollab

    const userSpecialties = specialtyArray.map((specialty) => {
        
        if (specialty.user_id === id){

            return(
                <ul>
            <li><p key={specialty.user_id} className="font-italic mb-0">{specialty.name} | {specialty.pro_level}</p></li>
            </ul>
                // <userSpecList specialty={specialty} onDelete={onDelete}/>
            )
        
        }
    })

    const userEquipment = equipmentArray.map((equipment) => {
        if (equipment.user_id === id){
            return(
                <ul>  
                <li><a href={equipment.equip_link} target="_blank" className="font-italic mb-0">{equipment.name}</a></li>
                </ul>
            )
        }
    })

    const userSoftware = softwareArray.map((software) => {
        if (software.user_id === id){
            return(
                <ul>
                <li><a href={software.soft_link} target="_blank" className="font-italic mb-0">{software.name}</a></li>
                </ul>
            )
        }
    })

    function handleProjSelect(e){
        projectsArray.map((project) => {
            if(project.title === e.target.value){
                setThisProjectId(project.id)
            }
        })
        setThisCollabId(id)
    }

    function onCollabBtnClick(){
        setBtnState(!btnState)
    }

    return(
        <>  
        <br></br>
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
        <div sclas="row py-5 px-4">
        <div className="col-md-5 mx-auto">
            <br></br>
            <div className="bg-white shadow rounded overflow-hidden">
                <div className="px-4 pt-0 pb-4 cover">
                    <div className="media align-items-end profile-head">
                        <div className="profile mr-3"><br></br><img src={profile_pic} alt={name} width="130" className="rounded mb-2 img-thumbnail"/></div> 
                        <div className="media-body mb-5 text-white"></div>
                            <h4 className="mt-0 mb-0">{name}</h4>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3">
                    <h5 className="mb-0">Bio</h5>
                    <div className="p-4 rounded shadow-sm bg-light">
                        <p className="font-italic mb-0">{bio}</p>
                    </div>
                </div>
                <div className="px-4 py-3">
                    <h5 className="mb-0">Specialties</h5>
                    <div className="p-4 rounded shadow-sm bg-light">
                        {userSpecialties}
                    </div>
                </div>
                <div className="px-4 py-3">
                    <h5 className="mb-0">Equipment</h5>
                    <div className="p-4 rounded shadow-sm bg-light">
                        {userEquipment}
                    </div>
                </div>
                <div className="px-4 py-3">
                    <h5 className="mb-0">Software</h5>
                    <div className="p-4 rounded shadow-sm bg-light">
                        {userSoftware}
                    </div>
                </div>
            </div>
            </div>
            </>
    )
}

export default CollabProfile;