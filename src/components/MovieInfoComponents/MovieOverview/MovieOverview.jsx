import React from 'react'
import './MovieOverview.scss'

function MovieOverview({overview}) {
    return (
         <section className="movie-overview">
        

          <h1>Overview</h1>
          <p className="movie-overview__text" >{overview}</p>

         </section>
         
            
       
    )
}

export default MovieOverview
