
import Poster from "../Components/Poster";
import ViewList from "../Components/ViewList";

export default function Home() {


    const topMoviesurl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1'
    const toptvShowurl = 'https://api.themoviedb.org/3/tv/top_rated?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1'

    return (
        <div>
            <Poster/>
            <ViewList title = {"Top movies"} url={topMoviesurl}/>
            <ViewList title = {"Top TV show"} url={toptvShowurl}/>
            
        </div>
    )
}