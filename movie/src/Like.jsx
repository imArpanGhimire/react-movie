import React, { useContext } from 'react'
import { likecontext } from './App'

const Like = () => {
    const { liked, setliked } = useContext(likecontext)
    return (
        <div className='text-white  '>
            <div className='mt-26 min-h-screen   bg-zinc-800'>
                <h1 className='text-2xl  text-center capitalize font-bold text-red-500'>Collection of your liked movies</h1>
                <p className='text-center'>{liked.length} movies in your collection as of now</p>
                {liked.map((movie, index) => {
                    return (
                        <>

                            <div
                                key={index}
                                className="flex p-3 rounded-xl justify-between items-center w-[40%] mt-10 border border-white/20 bg-white/10 backdrop-blur-md shadow-md mx-auto transition-transform "
                            >
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.original_title}
                                    className="rounded-2xl w-[150px] h-[180px]"
                                />
                                <div>
                                    <h1 className="text-lg font-semibold">{movie.original_title}</h1>
                                    <h4 className="text-sm text-gray-300">{movie.release_date}</h4>
                                    <h4 className="text-sm">
                                        <span className="text-yellow-500">IMDB</span>: {movie.vote_average}
                                    </h4>
                                </div>
                                <i className="ti ti-heart-filled text-3xl text-red-600"></i>
                            </div>

                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Like
