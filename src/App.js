import React from "react";
import {Switch, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = ([])

  return (
    <div>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Switch>
      <Route exact path="/login">
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path="/login">
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path="/signup">
        <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
