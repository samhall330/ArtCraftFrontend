import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function SignUp({users, setUsers, currentUser, setCurrentUser, API}){
    const history = useHistory()
    const [signUpForm, setSignUpForm] = useState({name: null, username: null, profile_pic: null, phone: null, password: null})

    function handleSignUp(e){
        const thisForm = {...signUpForm}
        thisForm[e.target.name] = (e.target.value)
        setSignUpForm(thisForm)
    }    

    function handleSubmit(e){
        e.preventDefault()
        fetch(`${API}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(signUpForm)
        })
        .then(r=>r.json())
        .then(data => { 
            const {user, token} = data
            setCurrentUser(user)
            localStorage.setItem("token", token)
            history.push("/profile")
        })
    }

    return(
        <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">Sign Up!</h3>
                            <p className="text-muted mb-4">Enter new user information below:</p>
                            <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                    <input onChange={handleSignUp} id="inputName" name="name" type="name" placeholder="Your Name" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input onChange={handleSignUp} id="inputUsername" name="username" type="username" placeholder="Username" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input onChange={handleSignUp} id="inputProfilePic" name="profile_pic" type="profile-pic" placeholder="Profile Pic" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input onChange={handleSignUp} id="inputPhone" name="phone" type="tel" placeholder="Phone Number" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input onChange={handleSignUp} id="inputPassword" name="password" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign Up</button>
                            </form>
                        </div>
                    </div>
                </div>
    )
}

export default SignUp;