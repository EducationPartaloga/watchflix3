import { useState } from "react"
import ViewListCard from "./ViewListCard"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"


export default function TVShowTop(props) {

    const [TVShow, setTVShow] = useState([])
    const [genres, setGenres] = useState([])
    const [isLoadingTVShow, setIsLoadingTVShow] = useState(true)
    const [isLoadingGenres, setIsLoadingGenres] = useState(true)

    const topTVShowUrl = 'https://api.themoviedb.org/3/tv/top_rated?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1'
    const genresUrl = "https://api.themoviedb.org/3/genre/tv/list?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US"

useEffect(
    ()=>{
        fetch(topTVShowUrl)
        .then( Response => Response.json())
        .then(answer => {
            setTVShow(answer.results)
            setIsLoadingTVShow(false)
        })
        fetch(genresUrl)
        .then( Response => Response.json())
        .then(answer => {
            setGenres(answer.genres)
            setIsLoadingGenres(false)
        })
    },
    []
)
    let list = []


    if (isLoadingTVShow === false && isLoadingGenres === false) {
        for (let index = 0; index < 6; index++) {
            const tvshow = TVShow[index];
            let newArrayGenres = []
            tvshow.genre_ids.map((id)=>{
                newArrayGenres.push  (
                    ...genres.filter((genre)=>{
                   return genre.id === id
                  })
                  )
    
           })
    
           list.push(
                <ViewListCard 
                key={tvshow.id}
               title ={tvshow.name} 
               image ={tvshow.poster_path} 
               genres ={newArrayGenres} 
               voteAverage ={tvshow.vote_average} 
               voteCount ={tvshow.vote_count}
       />
       )
    } 
    }


    if (isLoadingTVShow || isLoadingGenres)  
    return(<div>Загружается...</div>)

    return (
        <div className="max-w-screen-xl mx-auto mt-40">
            <div className="flex items-center justify-between p-6">
            <h2 className="text-md text-3xl">Top TV Show</h2>
            <NavLink className="text-yellow-300" to={'/tv-show'}>View More</NavLink>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
            {list}
            </div>
      

        </div>
    )
}