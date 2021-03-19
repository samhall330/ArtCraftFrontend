import React from "react";
import {Switch, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Search from "./Search";
import Profile from "./Profile";
import Projects from "./Projects";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])
  const [specialtyArray, setSpecialtyArray] = useState([])
  const [equipmentArray, setEquipmentArray] = useState([])
  const [softwareArray, setSoftwareArray] = useState([])
  const [projectsArray, setProjectsArray] = useState([])
  const history = useHistory()
  const API = "http://localhost:3000"

  useEffect(() => {
  const token = localStorage.getItem("token")
    fetch(`${API}/verify`, {
      headers: {
        Authorization: `Bearer ${token}`
    }})
      .then((response) => response.json())
      .then((userData) => {
        setCurrentUser(userData)
      })}
  , [])

  useEffect(() => {
    fetch(`${API}/specialties`)
    .then(r => r.json())
    .then(data => {
      setSpecialtyArray(data)
    })
  }, [])

  useEffect(() => {
    fetch(`${API}/equipment`)
    .then(r => r.json())
    .then(data => {
      setEquipmentArray(data)
    })
  }, [])

  useEffect(() => {
    fetch(`${API}/softwares`)
    .then(r => r.json())
    .then(data => {
      setSoftwareArray(data)
    })
  }, [])

  useEffect(() => {
    fetch(`${API}/projects`)
    .then(r => r.json())
    .then(data => {
      setProjectsArray(data)
    })
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
        {currentUser && <Profile currentUser={currentUser} specialtyArray={specialtyArray} setSpecialtyArray={setSpecialtyArray} equipmentArray={equipmentArray} setEquipmentArray={setEquipmentArray} softwareArray={softwareArray} setSoftwareArray={setSoftwareArray}/>}
      </Route>
      <Route exact path="/projects">
        <Projects currentUser={currentUser} API={API} projectsArray={projectsArray} setProjectsArray={setProjectsArray}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
