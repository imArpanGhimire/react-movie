import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import Like from "./Like"; // <-- Import your Like component
import { CarouselPlugin } from "./CarouselPlugin";

const likecontext = createContext()
const movieContext = createContext();

const App = () => {
  const [moviestore, setmoviestore] = useState([]);
  const [liked, setliked] = useState([])

  const api_key = "35c1f2a0f87e71677ba983bd1c9e8ca2";

  useEffect(() => {
    const getmovie = async () => {
      try {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`);
        const data = await resp.json();
        setmoviestore(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    getmovie();
  }, []);

  return (
    <Router>
      <div className="bg-neutral-900">
        <movieContext.Provider value={{ moviestore, setmoviestore }}>
          <likecontext.Provider value={{ liked, setliked }}>
            <Navbar />

            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    <CarouselPlugin />
                    <h1 className='ml-53 mt-10 text-2xl text-gray-400 font-bold'>Currently Trending</h1>
                    <div className='grid grid-cols-4 w-[80%] mx-auto p-2 gap-y-2'>
                      {moviestore.map((item, index) => (
                        <MovieCard item={item} index={index} key={index} />
                      ))}
                    </div>
                  </>
                }
              />

              {/* Like Page */}
              <Route path="/liked" element={<Like />} />
            </Routes>
          </likecontext.Provider>
        </movieContext.Provider>
      </div>
    </Router>
  );
};

export default App;
export { movieContext, likecontext };
