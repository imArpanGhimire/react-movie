import React, { useState, useContext } from "react";
import MovieDetail from "./MovieDetail";
import { likecontext } from "./App";

const MovieCard = ({ item }) => {
  const [showDetail, setShowDetail] = useState(false);

  const { liked, setliked } = useContext(likecontext);

  return (
    <>
      <div
        onClick={() => setShowDetail(true)}
        className="group relative text-gray-300 text-center w-[200px] rounded-2xl overflow-hidden mx-auto transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.original_title}
          className="rounded-2xl w-full h-auto"
        />
        <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
          <h1 className="text-lg font-bold text-slate-200 mb-1">
            {item.original_title}
          </h1>
          <h3 className="text-sm text-slate-300">{item.release_date}</h3>
          <h3 className="text-yellow-400 mt-2 text-sm">
            ⭐ {item.vote_average}
          </h3>
          <div className="flex justify-between gap-10 mt-8">
            <i
              onClick={(e) => {
                e.stopPropagation();
                setliked([...liked, item]);
              }}
              className="ti ti-heart-filled text-3xl hover:brightness-200 text-red-800"
            ></i>
            <i class="ti ti-bookmarks-filled text-3xl hover:brightness-200  text-gray-600"></i>
          </div>
        </div>
      </div>

      {/* Show detail card when clicked */}
      {showDetail && (
        <MovieDetail movie={item} onClose={() => setShowDetail(false)} />
      )}
    </>
  );
};

export default MovieCard;
