import React, {useState} from "react";
import {useParams, useHistory} from "react-router-dom";
import './project-card.css';

function ProjectCard({currentUser, project}){

    const history = useHistory()

    let image = ""

    const {id, title, duration, location, project_type, start_date} = project

    if (project_type === "comedy show"){
        image = "https://howtowritefunny.com/wp-content/uploads/2019/02/Crash-Course-in-StandupSMALL.jpg"
    } else if (project_type === "short film"){
        image = "https://c4.wallpaperflare.com/wallpaper/779/691/639/movies-film-reel-technology-projector-8mm-wallpaper-preview.jpg"
    } else {
        image = "https://www.artnews.com/wp-content/uploads/2020/05/shutterstock_1137734102.jpg"
    }

    function projCardClick(){
        history.push(`/projects/${id}`)
    }    

    return(
        <>
        <div onClick={projCardClick} className="col-lg-4">
            <figure className="caption-2 mb-0 shadow-sm border border-white border-md">
                <img src={image} alt="" className="w-100"/>
                <figcaption className="p-4 bg-white">
                    <h2 className="h5 font-weight-bold mb-2 font-italic">{title}</h2>
                    <p className="mb-0 text-small font-italic text-muted">{project_type.toUpperCase()} | {location}</p>
                </figcaption>
            </figure>
        </div>
       </>
        
    )
}

export default ProjectCard;