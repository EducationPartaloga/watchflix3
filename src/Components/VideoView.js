import { useEffect, useState } from "react"

import { PlayIcon, VideoCameraSlashIcon } from '@heroicons/react/24/outline'

export default function VideoView() {

    const [isOpen, setOpen] = useState(false)
    const [ListTV, setListTVn] = useState([])
    const [isLoadingListTV, setIsLoadingListTV] = useState(true)

    const ListTVUrl = "https://api.themoviedb.org/3/tv/airing_today?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1"

    useEffect(
        () => {
            fetch(ListTVUrl)
                .then(Response => Response.json())
                .then(answer => {
                    setListTV(answer.results)
                    setIsLoadingListTV(false)
                })
                
        )
        }}

        if (isLoadingListTV)
         return (<div>Загружается...</div>)









return (
    <div className="max-w-screen-xl mx-auto mt-40 border-2 border-yellow">
        <div className="border-4 border-blue-600 h-[600px] p-10 flex items-end relative">
            <div onClick={() => setOpen(true)} className='rounded-full border-2 border-yellow-300 bg-transparent w-20 h-20 flex items-center justify-center cursor-pointer absolute inset-y-1/2 inset-x-1/2 -translate-y-1/2'>
                <div className="rounded-full bg-yellow-300 w-12 h-12 flex items-center justify-center">
                    <PlayIcon className="h-6 w-6 ml-1 text-black" />
                </div>
            </div>
            <div className="grid gap-4">

                <h2>(ListTV[0]).name</h2>

                <p>(ListTV[0].overview)</p>

                {/* <p>video</p> */}
            </div>

        </div>


    </div>

)
            }