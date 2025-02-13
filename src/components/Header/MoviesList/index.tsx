import React, { Fragment } from "react";
import useFetchMovies from "../../../hooks/useFetchMovies";
import Header from "..";
import { AppButton, MovieElement, MovieImage, MovieInfo, MoviesSection, MovieTitle } from "./styles";

//Custom Hook --> DRY (Don´t Repeat Yourself)
//Componente ---> Tiene mucha logica compleja, muchos estados, muchos hooks de React

const MoviesList = () => {
    const { movies, isLoading, error } = useFetchMovies();

    const renderMovies = () => {
        return (
                <MoviesSection>
                    {movies.map((movie) => {
                        const { title, vote_average, id, release_date, poster_path } = movie;
    
                        return (
                            <MovieElement key={id}>
                                <MovieImage
                                alt = {`${title} Movie Poster`} 
                                src= {`https://image.tmdb.org/t/p/original${poster_path}`} 
                                width="200"
                                />
                                <MovieTitle>{title}</MovieTitle>
                                <MovieInfo score={Number(vote_average)}>Calificación: <span>{vote_average}</span></MovieInfo>
                                <MovieInfo>Fecha de lanzamiento: <span>{release_date}</span></MovieInfo>
                            </MovieElement>
                        );
                    })}
                </MoviesSection>
        )
    };

    const renderContent = () => {
        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error al cargar películas</p>;
        return renderMovies();
    };

    return (
        <Fragment>
            <Header appName="CinemaApp"/>
            <h2>Películas</h2>
            {renderContent()}
        </Fragment>
    );
};

export default MoviesList;