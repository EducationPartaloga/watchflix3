import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Faq from "./Pages/Faq";
import Show from "./Pages/Show";
import Contact from "./Pages/Contact";
import Pricing from "./Pages/Pricing";
import Movies from "./Pages/Movies";

export default function App() {

return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/show" element={<Show/>}/>
        <Route path="/video" element={<Video/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
)

}