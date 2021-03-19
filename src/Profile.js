// import userEvent from "@testing-library/user-event";
import React, {useState} from "react";

function Profile({currentUser}){
    const [bioBtnClick, setBioBtnClick] = useState(false)
    const [bioUpdateForm, setBioUpdateForm] = useState({bio: null})
    console.log(currentUser)

    function handleEditBio(e){
        setBioBtnClick(!bioBtnClick)
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
                    <button onClick={handleEditBio} class="btn btn-outline-dark btn-sm btn-block">Edit Bio</button>
                    <br></br>
                    {bioBtnClick? <form onSubmit={bioFormSubmit}><input id="inputBio" name="update_bio" type="update_bio" placeholder="Update Bio" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/></form> : null}
                </div>
            </div>
            <div className="px-4 py-3">
                <h5 className="mb-0">Specialties</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    <p className="font-italic mb-0">video editing, stand up comedy</p>
                </div>
            </div>
            <div className="px-4 py-3">
                <h5 className="mb-0">Equipment</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    <p className="font-italic mb-0">camera tripod, iPhoneX, microphone</p>
                </div>
            </div>
            <div className="px-4 py-3">
                <h5 className="mb-0">Software</h5>
                <div className="p-4 rounded shadow-sm bg-light">
                    <p className="font-italic mb-0">adobe premiere</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Profile;