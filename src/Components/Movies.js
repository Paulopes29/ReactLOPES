import React from "react";

const Movies = (props) => {
    return(
        <div>
            <ul>
                <li> <h3>Titre</h3></li>
                <li> {props.elem.title}</li>
            </ul>
            <ul>
                <li> <h3>Directeur </h3></li>
                <li>{props.elem.director}</li>

            </ul>
            <ul>
                <li> <h3>Producteur </h3></li>
                <li>{props.elem.producer}</li>
            </ul>

        </div>
    )
}
export default  Movies;