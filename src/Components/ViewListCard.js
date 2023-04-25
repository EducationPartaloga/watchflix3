
export default function ViewListCard(props) {

        const {title, image, genres, voteAverage, voteCount} = props

    
        return (
            <div className="w-[200px] h-[300px] p-6 bg-center bg-cover" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${image}")`}}>
                {genres.map((genre)=>{
                            return ( 
                                <span className="rounded-md bg-yellow-300 text-black py-[2px] px-2">
                                {genre.name}
                                </span>
                            )

            })
           }
                

                <div>
                    <div>
                        <span>{voteAverage}</span>
                        <span>{voteCount}</span>
                    </div>
                    <div>
                     <h3>{title}</h3>
                    </div>
                </div>
               
            </div>
        )
    }