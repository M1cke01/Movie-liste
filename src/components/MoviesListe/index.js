import React, { Fragment } from "react";

const MoviesListe = () => {
    const movies = [
        {id: 1, title: "Kung Fu Panda", year: 2008},
        {id: 2, title: "Sherk", year: 2002},
        {id: 3, title: "Oppenheimer", year: 2023},
    ]

    return (
        <Fragment>
            <h2>Pelis</h2>
            <section>
                {movies.map((movie) => {
                        const {title, year, id} = movie;

                        return (
                        <article key={id}>
                            <h3>{title}</h3>
                            <p>{year}</p>
                        </article>
                        );
                    })}
            </section>
        </Fragment>
    )
}

export default MoviesListe;