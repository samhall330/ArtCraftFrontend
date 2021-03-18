import React from "react";

function SignUp(){

    return(
        <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-7 mx-auto">
                            <h3 class="display-4">Sign Up!</h3>
                            <p class="text-muted mb-4">Enter new user information below:</p>
                            <form>
                            <div class="form-group mb-3">
                                    <input id="inputName" name="name" type="name" placeholder="Your Name" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div class="form-group mb-3">
                                    <input id="inputUsername" name="username" type="username" placeholder="Username" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4"/>
                                </div>
                                <div class="form-group mb-3">
                                    <input id="inputProfilePic" name="profile-pic" type="profile-pic" placeholder="Profile Pic" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div class="form-group mb-3">
                                    <input id="inputPhone" name="phone" type="tel" placeholder="Phone Number" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div class="form-group mb-3">
                                    <input id="inputPassword" name="password" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
    )

}

export default SignUp;