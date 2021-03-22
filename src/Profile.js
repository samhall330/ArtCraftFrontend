// import userEvent from "@testing-library/user-event";
import React, {useState} from "react";
// import {Link} from "react-router-dom";

function Profile({
    currentUser, 
    specialtyArray, 
    setSpecialtyArray, 
    equipmentArray, 
    setEquipmentArray,
    softwareArray,
    setSoftwareArray}){
    const [bioBtnClick, setBioBtnClick] = useState(false)
    const [specBtnClick, setSpecBtnClick] = useState(false)
    const [equipBtnClick, setEquipBtnClick] = useState(false)
    const [softBtnClick, setSoftBtnClick] = useState(false)
    const [bioUpdateForm, setBioUpdateForm] = useState({bio: null})
    // console.log(currentUser)

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

    function bioFormSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3000/users/${currentUser.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify(bio)
        })  
    }

    const userSpecialties = specialtyArray.map((specialty) => {
        if (specialty.user_id === currentUser.id){
            return(
                <p key={specialty.user_id} className="font-italic mb-0">{specialty.spec_name.toUpperCase()} | {specialty.pro_level}</p>
            )
        }
    })

    const userEquipment = equipmentArray.map((equipment) => {
        if (equipment.user_id === currentUser.id){
            // console.log(equipment.equip_name)
            return(
                <a href={equipment.equip_link} target="_blank" className="font-italic mb-0">{equipment.equip_name}</a>
            )
        }
    })

    const userSoftware = softwareArray.map((software) => {
        if (software.user_id === currentUser.id){
            return(
                <a href={software.soft_link} target="_blank" className="font-italic mb-0">{software.soft_name}</a>
            )
        }
    })

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
                    {bioBtnClick? <form onSubmit={bioFormSubmit}><input id="inputBio" name="update_bio" type="update_bio" placeholder="Update Bio" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
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
                    {specBtnClick? <form><input id="inputSpec" name="add_spec" type="add_spec" placeholder="Add Specialty" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <label for="pro_level">Professional Level:</label>
                    <select name="pro_level" id="pro_level">
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
                    {equipBtnClick? <form><input id="inputEquip" name="add_equip" type="add_equip" placeholder="Add Equipment" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <br></br>
                    <input id="inputEquipLink" name="add_equip_link" type="add_equip_link" placeholder="Link to Product Page" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <br></br>
                    <input type="submit" value="Submit"></input>
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
                    {softBtnClick? <form><input id="inputSoftware" name="add_software" type="add_software" placeholder="Add Software" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <br></br>
                    <input id="inputSoftLink" name="add_soft_link" type="add_soft_link" placeholder="Link to Product Page" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                    </form> : null}
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Profile;