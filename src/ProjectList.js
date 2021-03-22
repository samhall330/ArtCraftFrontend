import React from "react";
import ProjectCard from "./ProjectCard"

function ProjectList({currentUser, API, projectsArray, setProjectArray, ProjectCardClick}){


    const userProjects = projectsArray.map((project) => {
        if(project.user_id == currentUser.id){
            return (
                // <div className="row py-5">
                <ProjectCard project={project} key={project.id} currentUser={currentUser}/>
                
            )
        }
        
        
    })

    return(
        // <div class="container py-5">
        // <div class="row">
        // <div class="col-lg-11 mx-auto">
        <>
        {/* //     <h5>{currentUser.name}'s Projects</h5> */}
            {userProjects}
            </>
        // </div>
        // </div>
        // </div>
    )
}

export default ProjectList;