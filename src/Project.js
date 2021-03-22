import React from "react";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function Project({API}){
    
    const [thisProject, setThisProject] = useState()
    const id = useParams()
    console.log(id)
    // const {id, }

    useEffect(() => {
        fetch(`${API}/projects/${id}`)
        .then(r => r.json())
        .then(data => {setThisProject(data)})
    }, [])

    console.log(thisProject)

    return(
    <h1>Here is a Project!</h1>
    )
}

export default Project;