import { useState } from "react"
import ViewListCard from "./ViewListCard"
import { useEffect } from "react"


export default function ViewList(props) {

    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [isLoadingMovies, setIsLoadingMovies] = useState(true)
    const [isLoadingGenres, setIsLoadingGenres] = useState(true)

    const topMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1'
    const genresUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US"

useEffect(
    ()=>{
        fetch(topMoviesUrl)
        .then( Response => Response.json())
        .then(answer => {
            setMovies(answer.results)
            setIsLoadingMovies(false)
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


    if (isLoadingMovies === false && isLoadingGenres === false) {
        for (let index = 0; index < 6; index++) {
            const movie = movies[index];
            let newArrayGenres = []
            movie.genre_ids.map((id)=>{
              newArrayGenres = genres.filter((genre)=>{
               return genre.id === id
              })
    
           })
    
    
           list.push(
                <ViewListCard 
               title ={movie.title} 
               image ={movie.poster_path} 
               genres ={newArrayGenres} 
               voteAverage ={movie.vote_average} 
               voteCount ={movie.vote_count}
       />
       )
    
    }

    }


    if (isLoadingMovies || isLoadingGenres)  
    return(<div>Загружается...</div>)

    return (
        <div className="max-w-screen-xl mx-auto mt-40">
            <div className="flex items-center justify-between">
            <h2 className="text-md text-3xl">Top Movies</h2>
            <button className="text-yellow-300">View More</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
            {list}
            </div>
      

        </div>
    )
}