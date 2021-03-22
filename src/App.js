import React from "react";
import {Switch, Route} from "react-router-dom";
import {useState, useEffect} from "react";
import {useParams, useHistory} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import NavBar from "./NavBar";
import Search from "./Search";
import Profile from "./Profile";
import ProjectList from "./ProjectList";
import Project from "./Project";

function App() {
  const API = "http://localhost:3000"
  const [currentUser, setCurrentUser] = useState(null)
  const [users, setUsers] = useState([])
  const [specialtyArray, setSpecialtyArray] = useState([])
  const [equipmentArray, setEquipmentArray] = useState([])
  const [softwareArray, setSoftwareArray] = useState([])
  const [projectsArray, setProjectsArray] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const history = useHistory()

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
    fetch(`${API}/users`)
    .then(r => r.json())
    .then(data => {
      setUsers(data)
    })
  }, [])
  
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
      <div class="container py-5">
      <NavBar currentUser={currentUser} handleLogOut={handleLogOut}/>
      <div class="row">
      <div class="col-lg-11 mx-auto">
      <Switch>
      <Route exact path="/search">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} currentUser={currentUser} users={users}/>
      </Route>
      <Route exact path="/login">
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} API={API}/>
      </Route>
      <Route exact path="/signup">
        <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser} users={users} setUsers={setUsers} API={API}/>
      </Route>
      <Route exact path="/profile">
        {currentUser && <Profile API={API} currentUser={currentUser} specialtyArray={specialtyArray} setSpecialtyArray={setSpecialtyArray} equipmentArray={equipmentArray} setEquipmentArray={setEquipmentArray} softwareArray={softwareArray} setSoftwareArray={setSoftwareArray}/>}
      </Route>
      <Route exact path="/projects">
        {currentUser && <h5 className="display-4">{currentUser.name}'s Projects</h5> }
        <div className="row py-5">
        <ProjectList currentUser={currentUser} API={API} projectsArray={projectsArray} setProjectsArray={setProjectsArray}/>
        </div>
      </Route>
      <Route exact path="/projects/:id">
        <Project API={API}/>
      </Route>
      </Switch>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
