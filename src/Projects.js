import React from "react";
import ProjectCard from "./ProjectCard"

function Projects({currentUser, API, projectsArray, setProjectArray}){

    const userProjects = projectsArray.map((project) => {
        console.log(project)
        
        if(project.user_id == currentUser.id){
            return (
                <div className="row py-5">
                <ProjectCard project ={project} key={project.id} currentUser={currentUser}/>
                </div>
            )
        }
        
        
    })

    return(
        <div>
            <h5 className="display-4">{currentUser.name}'s Projects</h5>
            {userProjects}
            
        </div>
    )
}

export default Projects;