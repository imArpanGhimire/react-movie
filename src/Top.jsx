import React, { useContext } from "react";
import { movieContext } from "./App";

const Top = () => {
  const { moviestore, setmoviestore } = useContext(movieContext);

  return (
    <>
      <div className="flex justify-between w-[50%] mx-auto">
        <div>
          {moviestore.map((item) => {
            return (
              <>
                <div className="flex justify-between border-2  p-5  ">
                  <div className="border-2 items-center  h-fit my-auto border-red-800/80 w-[50%]">
                    <h1 className="text-3xl font-bold ">{item.title}</h1>
                    <p className="line-clamp-2 text-sm">{item.overview}</p>
                    <button className="p-2 text-black border-black border-2">
                      Watch Now
                    </button>
                  </div>

                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt=""
                      className="h-[230px] w-[230px]"
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Top;
