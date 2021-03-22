// import userEvent from "@testing-library/user-event";
import React, {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
// import {Link} from "react-router-dom";

function Profile({
    currentUser, 
    specialtyArray, 
    setSpecialtyArray, 
    equipmentArray, 
    setEquipmentArray,
    softwareArray,
    setSoftwareArray,
    API}) {
    const [bioBtnClick, setBioBtnClick] = useState(false)
    const [specBtnClick, setSpecBtnClick] = useState(false)
    const [equipBtnClick, setEquipBtnClick] = useState(false)
    const [softBtnClick, setSoftBtnClick] = useState(false)
    const [bio, setBio] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [proLevel, setProLevel] = useState("")
    const [equipment, setEquipment] = useState("")
    const [equipmentLink, setEquipmentLink] = useState("")
    const [software, setSoftware] = useState("")
    const [softwareLink, setSoftwareLink] = useState("")
    const [bioUpdateForm, setBioUpdateForm] = useState({bio: null})
    // const history = useHistory()

    // function projectCardClick(e){
    //     let {projectId} = useParams();
    // }

    function handleEditBio(e){
        setBioBtnClick(!bioBtnClick)
    }

    function handleSpecClick(e){
        setSpecBtnClick(!specBtnClick)
    }

    function handleEquipClick(e){
        setEquipBtnClick(!equipBtnClick)
    }
    
    function handleSoftClick(e){
        setSoftBtnClick(!softBtnClick)
    }

    const userSpecialties = specialtyArray.map((specialty) => {
        if (specialty.user_id === currentUser.id){
            return(
                <ul>
                <li><p key={specialty.user_id} className="font-italic mb-0">{specialty.name} | {specialty.pro_level}</p></li>
                </ul>
            )
        }
    })

    const userEquipment = equipmentArray.map((equipment) => {
        if (equipment.user_id === currentUser.id){
            return(
                <ul>  
                <li><a href={equipment.equip_link} target="_blank" className="font-italic mb-0">{equipment.name}</a></li>
                </ul>
            )
        }
    })

    const userSoftware = softwareArray.map((software) => {
        if (software.user_id === currentUser.id){
            return(
                <ul>
                <li><a href={software.soft_link} target="_blank" className="font-italic mb-0">{software.name}</a></li>
                </ul>
            )
        }
    })

    function handleBioChange(e){
        setBio(e.target.value)
    }

    function bioFormSubmit(e){
        e.preventDefault()
        const bioObj = {bio: bio}
        fetch(`${API}/${currentUser.id}`,{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bioObj)
        })
        .then(r => r.json())
        .then(data =>{
            // console.log(data)
        })
    }

    function handleChangeSpec(e){
        setSpecialty(e.target.value)
    }

    function handleChangeProLevel(e){
        setProLevel(e.target.value)
    }

    function onAddSpec(e){
        e.preventDefault()
        const specObj = {user_id: currentUser.id, spec_name: specialty, pro_level: proLevel}
            fetch (`${API}/specialties`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(specObj)
            })
            .then(r => r.json())
            .then(data => {
                setSpecialtyArray([...specialtyArray, data])
                // ***CLEAR INPUT FIELDS***
            })
    }

    function handleChangeEquip(e){
        setEquipment(e.target.value)
    }

    function handleChangeEquipLink(e){
        setEquipmentLink(e.target.value)
    }

    function onAddEquip(e){
        e.preventDefault()
        const equipObj = {user_id: currentUser.id, equip_name: equipment, equip_link: equipmentLink}
            fetch (`${API}/equipment`,{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(equipObj)
            })
            .then(r => r.json())
            .then(data => {
                setEquipmentArray([...equipmentArray, data])
                // ***CLEAR INPUT FIELDS***
            })
    }

    function handleChangeSoft(e){
        setSoftware(e.target.value)
    }
    
    function handleChangeSoftLink(e){
        setSoftwareLink(e.target.value)
    }

    function onAddSoftware(e){
        e.preventDefault()
        const softwareObj = {user_id: currentUser.id, name: software, soft_link: softwareLink}
        console.log(softwareObj)
            fetch(`${API}/softwares`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(softwareObj)
            })
            .then(r => r.json())
            .then(data => {
                setSoftwareArray([...softwareArray, data])
                // ***CLEAR INPUT FIELDS***
            })
    }

    return(
    <>  
    <div sclas="row py-5 px-4">
    <div className="col-md-5 mx-auto">
        <br></br>
        <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
                <div className="media align-items-end profile-head">
                    <div className="profile mr-3"><br></br><img src={currentUser.profile_pic} alt={currentUser.name} width="130" className="rounded mb-2 img-thumbnail"/></div> 
                    <div className="media-body mb-5 text-white"></div>
                        <h4 className="mt-0 mb-0">{currentUser.name}</h4>
                    </div>
                </div>
            </div>
            <div className="px-4 py-3">
                <h5 className="mb-0">Bio</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    <p className="font-italic mb-0">{currentUser.bio}</p>
                    <br></br>
                    <button onClick={handleEditBio} className="btn btn-outline-dark btn-sm btn-block">Edit Bio</button>
                    <br></br>
                    {bioBtnClick? <form onSubmit={bioFormSubmit}><input onChange={handleBioChange} id="inputBio" name="update_bio" type="update_bio" placeholder="Update Bio" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                    </form> : null}
                </div>
            </div>
            <div className="px-4 py-3">
                <h5 className="mb-0">Specialties</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    {userSpecialties}
                    <br></br>
                    <button onClick={handleSpecClick} className="btn btn-outline-dark btn-sm btn-block">Add Specialty</button>
                    <br></br>
                    {specBtnClick? <form onSubmit={onAddSpec}><input onChange={handleChangeSpec} id="inputSpec" name="add_spec" type="add_spec" placeholder="Add Specialty" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <label for="pro_level">Professional Level:</label>
                    <select onChange={handleChangeProLevel} name="pro_level" id="pro_level">
                        <option value="Amateur">Amateur</option>
                        <option value="Semi-Pro">Semi-Professional</option>
                        <option value="Professional">Professional</option>
                    </select>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                    </form> : null}
                </div>
            </div>
            <div className="px-4 py-3">
                <h5 className="mb-0">Equipment</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    {userEquipment}
                    <br></br>
                    <button onClick={handleEquipClick} className="btn btn-outline-dark btn-sm btn-block">Add Equipment</button>
                    <br></br>
                    {equipBtnClick? <form onSubmit={onAddEquip}><input onChange={handleChangeEquip} id="inputEquip" name="add_equip" type="add_equip" placeholder="Add Equipment" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <br></br>
                    <input onChange={handleChangeEquipLink} id="inputEquipLink" name="add_equip_link" type="add_equip_link" placeholder="Link to Product Page" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <br></br>
                    <input type="submit" value="Add"></input>
                    </form> : null}
                </div>
            </div>
            <div className="px-4 py-3">
                <h5 className="mb-0">Software</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    {userSoftware}
                    <br></br>
                    <button onClick={handleSoftClick} className="btn btn-outline-dark btn-sm btn-block">Add Software</button>
                    <br></br>
                    {softBtnClick? <form onSubmit={onAddSoftware}><input onChange={handleChangeSoft} id="inputSoftware" name="add_software" type="add_software" placeholder="Add Software" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <br></br>
                    <input onChange={handleChangeSoftLink} id="inputSoftLink" name="add_soft_link" type="add_soft_link" placeholder="Link to Product Page" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <br></br>
                    <input type="submit" value="Add"></input>
                    </form> : null}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Profile;