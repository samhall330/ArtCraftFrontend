import React from "react";
import {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import './user-card.css';

function Project({API, projCollabArray}){
    
    const [thisProject, setThisProject] = useState("")
    const params = useParams()
    const history = useHistory()
    const project_id = params.id

    const thisProjCollabs = projCollabArray.map((collab) => {
        if(collab.project_id == project_id){
            return(
            <>
            <figure class="snip0064 red">
                <figcaption>
                    {/* <p>{specName}</p> */}
                    <h2>{collab.username}</h2><span class="position">{collab.bio}</span>
                </figcaption>
                <div class="image"><img src={collab.profile_pic} alt={collab.username}/></div>
                <a href="#"></a>
            </figure>
            </>
            )
        }
    })

    useEffect(() => {
        fetch(`${API}/projects/${project_id}`)
        .then(r => r.json())
        .then(data => setThisProject(data))
    }, [])

    function handleSearchClick(){
        history.push("/search")
    }

    const {title, project_type, start_date, duration, location} = thisProject
    // console.log(thisProject)

    let image = ""

    if (project_type === "comedy show"){
        image = "https://howtowritefunny.com/wp-content/uploads/2019/02/Crash-Course-in-StandupSMALL.jpg"
    } else if (project_type === "short film"){
        image = "https://c4.wallpaperflare.com/wallpaper/779/691/639/movies-film-reel-technology-projector-8mm-wallpaper-preview.jpg"
    } else {
        image = "https://www.artnews.com/wp-content/uploads/2020/05/shutterstock_1137734102.jpg"
    }

    return(
        <>
        <div>
        <div class="col-lg-11 mx-auto">
            <figure className="caption-2 mb-0 shadow-sm border border-white border-md">
                <img src={image} alt="" className="w-100"/>
                <figcaption className="p-4 bg-white">
                    <h2 className="h5 font-weight-bold mb-2 font-italic">{title}</h2>
                    <p className="mb-0 text-small font-italic text-muted">{project_type}</p>
                        <ul>
                            <li><p className="mb-0 text-small font-italic text-muted">Location: {location}</p></li>
                            <li><p className="mb-0 text-small font-italic text-muted">Start Date: {start_date}</p></li>
                            <li><p className="mb-0 text-small font-italic text-muted">Duration: {duration}</p></li>
                            <br></br>
                            <button onClick={handleSearchClick} className="btn btn-outline-dark btn-sm btn-block">Search Collaborators</button>
                        </ul>
                </figcaption>
            </figure>
            </div>
        </div>
            {thisProjCollabs}
        </>
    )
}

export default Project;