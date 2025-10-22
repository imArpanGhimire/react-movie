import React from "react";
import { motion } from "framer-motion";

const MovieDetail = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        // Dim background
        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg flex justify-center items-center z-50">
            {/* Animated half-screen card */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 60 }}
                transition={{ duration: 0.3 }}
                className="relative bg-neutral-900 text-white w-[70%] h-[60vh] rounded-2xl shadow-2xl flex overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                >
                    ✖
                </button>

                {/* Left side — Poster */}
                <div className="w-1/2 h-full">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-l-2xl"
                    />
                </div>

                {/* Right side — Details */}
                <div className="w-1/2 p-8 flex flex-col justify-center gap-4">
                    <h2 className="text-3xl font-bold">{movie.title}</h2>
                    <p className="text-gray-400 text-sm">
                        Release Date: {movie.release_date}
                    </p>
                    <p className="text-yellow-400 font-semibold">⭐ {movie.vote_average}</p>
                    <p className="text-gray-300 text-sm line-clamp-5">{movie.overview}</p>

                    <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 transition rounded-lg font-semibold w-fit">
                        ▶ Watch Now
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default MovieDetail;
