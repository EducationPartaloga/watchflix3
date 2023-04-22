

export default function ViewList(props) {


const {title, list} = props

    return (
        <div className="max-w-screen-xl mx-auto mt-40">
            <div className="flex items-center justify-between">
            <h2 className="text-md text-3xl">{title}</h2>
            <button className="text-yellow-300">View More</button>
            </div>
       
        </div>
    )
}