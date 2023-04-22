import Poster from "../Components/Poster";
import ViewList from "../Components/ViewList";

export default function Home() {
    return (
        <div>
            <Poster/>
            <ViewList title = {"Top movies"} list = {[1,2,3,4]}/>
            <ViewList title = {"Top TV show"} list = {[5,6,7,8]}/>
            <h1 className="flex justify-center items-center">Home</h1>
        </div>
    )
}