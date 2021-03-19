import React from "react";
import './project-card.css';

function ProjectCard({currentUser, project}){

    const {id, title, duration, location, project_type, start_date} = project

    return(

        <div className="col-lg-4">
            <figure className="caption-2 mb-0 shadow-sm border border-white border-md">
                <img src="https://i.postimg.cc/pTkkKvN6/14.jpg" alt="" className="w-100"/>
                <figcaption className="p-4 bg-white">
                    <h2 className="h5 font-weight-bold mb-2 font-italic">"{title}"</h2>
                    <p className="mb-0 text-small font-italic text-muted">{project_type.toUpperCase()} | {location}</p>
                </figcaption>
            </figure>
        </div>
    )
}

export default ProjectCard;