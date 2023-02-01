import axios from '../axios'
import React, { useEffect, useState } from 'react'
import './Rows.css'

function Rows({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([])

    const base_url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }

        fetchData()
    }, [fetchUrl])

    return (
        <div className='rows'>
            <h2>{title}</h2>
            <div className="rows__poster">
                {movies.map(movie => (
                    <img className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        key={movie.id} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                            }`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Rows