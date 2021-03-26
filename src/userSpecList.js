import React from "react";

function userSpecList({specialty, onDelete}){

    const {id, user_id, name, pro_level} = specialty

    return(
        <ul>
        <li><p key={user_id} className="font-italic mb-0">{name} | {pro_level}</p></li>
        <button onClick={onDelete}>Delete</button>
        </ul>
    )

}

export default userSpecList;