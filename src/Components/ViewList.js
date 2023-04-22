import { useState } from "react"
import ViewListCard from "./ViewListCard"
import { useEffect } from "react"


export default function ViewList(props) {

    const {data, setData} = useState([])


const {title, url} = props

useEffect(
    ()=>{
        fetch(url)
        .then( Response =>  return Response.json())
        .then(answer => {
            setData(answer.results)
        })
    },
    []
)

    return (
        <div className="max-w-screen-xl mx-auto mt-40">
            <div className="flex items-center justify-between">
            <h2 className="text-md text-3xl">{title}</h2>
            <button className="text-yellow-300">View More</button>
            </div>

       <ViewListCard data={{}}/>

        </div>
    )
}