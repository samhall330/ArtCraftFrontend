import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function Login({currentUser, setCurrentUser, API}){

    const [loginForm, setLoginForm] = useState({username: null, password: null })
    const history = useHistory()

    function handleLogin(e){
        const thisForm = {...loginForm}
        thisForm[e.target.name] = (e.target.value)
        setLoginForm(thisForm)
    }

    function pushSignUp(){
        history.push("/signup")
    }

    function handleSubmit(e){   
        e.preventDefault()
        fetch(`${API}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(loginForm)
        })
        .then(r => r.json())
        .then((userData) => {
            const {user, token} = userData
            setCurrentUser(user)
            localStorage.setItem("token", token)
            history.push("/profile")
        })
    };
    
    return (
        <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">Login</h3>
                            <p className="text-muted mb-4">Enter username and password below:</p>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input onChange={handleLogin} id="inputUsername" name="username" type="username" placeholder="Username" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input onChange={handleLogin} id="inputPassword" name="password" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Log In</button>
                            </form>
                            <br></br>
                            <h3 className="display-4">Haven't Signed Up Yet?</h3>
                            <br></br>
                            <button type="submit" onClick={pushSignUp} className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign Up</button>
                        </div>
                    </div>
                </div>
    );
};

export default Login;