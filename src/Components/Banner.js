import axios from '../axios';
import React, { useEffect, useState } from 'react'
import './Banner.css'
import requests from '../Requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(()=> {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[])

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original//bKxiLRPVWe2nZXCzt6JPr5HNWYm.jpg)`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                Cobra Kai
                </h1>
                <div className="banner__buttons">
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>Add to List</button>
                </div>
                <h1 className="banner__description">
                    {truncate("From the mind of horror manga maestro Junji Ito comes a spine-tingling selection of some of his most bizarre, disturbing and terrifying tales.")}
                </h1>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner