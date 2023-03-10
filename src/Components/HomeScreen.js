import React from 'react'
import Banner from './Banner'
import "./HomeScreen.css"
import Navbar from './Navbar'
import Rows from './Rows'
import requests from '../Requests'

function HomeScreen() {
  return (
    <div className='homescreen'>
      <Navbar />
      <Banner />
      <Rows
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
      />
      <Rows
        title='Top Rated'
        fetchUrl={requests.fetchTopRated}
      />
      <Rows
        title='Comedy Movies'
        fetchUrl={requests.fetchComedyMovies}
      />
      <Rows
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
      />
      <Rows
        title='Horror Movies'
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Rows
        title='Romance Movies'
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Rows
        title='Documentaries'
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  )
}

export default HomeScreen