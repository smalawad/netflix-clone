import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

const base_url = "https:/image.tmdb.org/t/p/original/";

function Row({title, fetchURL, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    //snippet of code which runs based on a specific condition/variable
    useEffect (() => {
        // if [], run once when the row loads, and dont run again.
        // we have to make asynchronous call.
        async function fetchData() {
            const request = await axios.get(fetchURL);
            //"https://api.themoviedb.org/3/
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    // const handleClick = async(movie) => {
    //     if (trailerUrl) {
    //         setTrailerUrl("");
    //     }else {
    //         movieTrailer(movie?.name || "")
    //         .then((url) => {
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             setTrailerUrl(urlParams.get("v"));
    //         })
    //         .catch((error) => console.log(error));
    //     }
    // }; 

    const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
          );
          setTrailerUrl(trailerurl.data.results[0]?.key);
        }
      };

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__posters">
                
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path 
                        }`} 
                        alr={movie.name}
                        // key={movie.id}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            <YouTube videoId={trailerUrl} opts={opts} />
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
