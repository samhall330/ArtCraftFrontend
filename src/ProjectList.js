import React from "react";
import ProjectCard from "./ProjectCard"

function Projects({currentUser, API, projectsArray, setProjectArray}){

    function projectCardClick(e){
        console.log(e)
    }

    const userProjects = projectsArray.map((project) => {
        if(project.user_id == currentUser.id){
            return (
                // <div className="row py-5">
                <ProjectCard projectCardClick={projectCardClick} project={project} key={project.id} currentUser={currentUser}/>
                
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

export default Projects;