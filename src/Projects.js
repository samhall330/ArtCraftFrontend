import React from "react";
import ProjectCard from "./ProjectCard"

function Projects({currentUser, API, projectsArray, setProjectArray}){

    const userProjects = projectsArray.map((project) => {
        if(project.user_id === currentUser.id){
            return (
                <ProjectCard />
            )
            console.log({userProjects})
        }
    })

    return(
        <div></div>
       
    )
}

export default Projects;