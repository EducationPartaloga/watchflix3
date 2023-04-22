import Poster from "../Components/Poster";
import ViewList from "../Components/ViewList";

export default function Home() {
    return (
        <div>
            <Poster/>
            <ViewList/>
            <h1 className="flex justify-center items-center">Home</h1>
        </div>
    )
}