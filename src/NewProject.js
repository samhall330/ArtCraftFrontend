import React from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";

function NewProject({currentUser, API, projectsArray, setProjectsArray}){

    const [newProjectForm, setNewProjectForm] = useState({user_id: currentUser.id, title: "", project_type: "", location: "", start_date: "", duration: ""})
    const history = useHistory()
// console.log(currentUser)
    function handleNewProject(e){
        const thisForm = {...newProjectForm}
        thisForm[e.target.name] = (e.target.value)
        setNewProjectForm(thisForm)
    }

    function handleProjSubmit(e){
        e.preventDefault()
        newProjectForm.user_id = currentUser.id
        fetch(`http://localhost:3000/projects`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newProjectForm)
        })
        .then(r => r.json())
        .then(data => {
            setProjectsArray([...projectsArray, data])
            history.push("/projects-list")
        })
    }

    return(
        <>
        <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 mx-auto">
                            <h3 className="display-4">New Project Form</h3>
                            <form onSubmit={handleProjSubmit}>
                            <div className="form-group mb-3">
                                    <input onChange={handleNewProject} id="inputTitle" name="title" type="title" placeholder="Project Title" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input onChange={handleNewProject} id="inputProjectType" name="project_type" type="project-type" placeholder="Project Type" required="" autofocus="" className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input onChange={handleNewProject} id="inputLocation" name="location" type="location" placeholder="Location" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input onChange={handleNewProject} id="inputStartDate" name="start_date" type="start-date" placeholder="Start Date" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <div className="form-group mb-3">
                                    <input onChange={handleNewProject} id="inputDuration" name="duration" type="duration" placeholder="Project Duration" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Create Project</button>
                            </form>
                        </div>
                    </div>
                </div>
                </>
    )
    
}

export default NewProject;

