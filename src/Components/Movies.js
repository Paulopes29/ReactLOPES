import React from "react";
import style from "./Movie.module.css";

const Movies = (props) => {
    return(
        <div className={style.divMovies}>
            <table className={style.listeMovies}>
                <tr>
                    <td>{props.elem.title}</td>
                    <td>{props.elem.director}</td>
                    <td>{props.elem.producer}</td>
                </tr>
            </table>
        </div>
    )
}
export default  Movies;