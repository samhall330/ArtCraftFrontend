import React from "react";
import {Switch, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Search from "./Search";
import Profile from "./Profile";


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = ([])
  const history = useHistory()
  const API = "http://localhost:3000"

  useEffect(() => {
  const token = localStorage.getItem("token")
    fetch(`${API}/users/verify`, {
      headers: {
        Authorization: `Bearer ${token}`
    }})
      .then((response) => response.json())
      .then((userData) => {
        if (userData.id === true)
        setCurrentUser(userData)})
  }, [])

  function handleLogOut(){
    localStorage.removeItem("token")
    fetch(`${API}/logout`, {
      method: "POST"
    })
    .then((user) => {
      setCurrentUser(null)
      history.push('/login')
    })
  }

  return (
    <div>
      <NavBar currentUser={currentUser} handleLogOut={handleLogOut}/>
      <Switch>
      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/login">
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} API={API}/>
      </Route>
      <Route exact path="/signup">
        <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers} API={API}/>
      </Route>
      <Route exact path="/profile">
        {currentUser && <Profile currentUser={currentUser}/>}
      </Route>
      </Switch>
    </div>
  );
}

export default App;
