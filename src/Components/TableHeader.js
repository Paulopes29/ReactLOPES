import React from "react";
import style from "./Movie.module.css";

const MoviesHeader = () => {
    return(
        <div className={style.divMovies}>
            <table className={style.listeMovies}>
                <tr>
                    <th>Titre</th>
                    <th>Directeur</th>
                    <th>Producteur</th>
                </tr>
            </table>
        </div>
    )
}
export default  MoviesHeader;