import React, {useState} from "react";
import './project-card.css';

function ProjectCard({currentUser, project}){

    let image = ""

    const {id, title, duration, location, project_type, start_date} = project

    if (project_type === "comedy show"){
        image = "https://howtowritefunny.com/wp-content/uploads/2019/02/Crash-Course-in-StandupSMALL.jpg"
    } else if (project_type === "short film"){
        image = "https://aatfweb.files.wordpress.com/2017/06/film.jpg"
    } else {
        image = "https://www.artnews.com/wp-content/uploads/2020/05/shutterstock_1137734102.jpg"
    }

    return(
        <>
        <div className="col-lg-4">
            <figure className="caption-2 mb-0 shadow-sm border border-white border-md">
                <img src={image} alt="" className="w-100"/>
                <figcaption className="p-4 bg-white">
                    <h2 className="h5 font-weight-bold mb-2 font-italic">"{title}"</h2>
                    <p className="mb-0 text-small font-italic text-muted">{project_type.toUpperCase()} | {location}</p>
                </figcaption>
            </figure>
        </div>
       </>
        
    )
}

export default ProjectCard;