"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useContext } from "react";
import { movieContext } from "./App";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Genre mapping
const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
};

const getGenreNames = (genreIds) => {
    return genreIds?.map((id) => genreMap[id] || "Unknown") || [];
};

export function CarouselPlugin() {
    const plugin = React.useRef(
        Autoplay({ delay: 10000, stopOnInteraction: false })
    );
    const { moviestore } = useContext(movieContext);

    return (
        <Carousel plugins={[plugin.current]} className="w-full mt-16 relative">
            <CarouselContent>
                {moviestore.slice(10, 18).map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-3 w-[55%] mx-auto">
                            <Card className="bg-neutral-900 text-white border-gray-600 shadow-lg rounded-2xl overflow-hidden">
                                <CardContent className="flex justify-between items-center p-6 relative">
                                    {/* LEFT SECTION */}
                                    <div className="max-w-[50%] space-y-3 text-end">
                                        <h1 className="text-3xl font-bold">{item.title}</h1>
                                        <p className="text-sm text-gray-300 line-clamp-3">
                                            {item.overview}
                                        </p>
                                        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md font-semibold text-white transition-all">
                                            Watch Now
                                        </button>
                                    </div>

                                    {/* RIGHT SECTION (Image + Hover) */}
                                    <div className="relative group flex-shrink-0">
                                        {/* Movie Poster */}
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                            alt={item.title}
                                            className="h-[280px] w-[220px] rounded-xl "
                                        />

                                        {/* Hover Overlay - covers 90% of image */}
                                        <div className="absolute bottom-0 left-0 w-full h-[90%] bg-gradient-to-t from-black via-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl p-4 flex flex-col justify-end">
                                            <p className="text-white text-sm">
                                                <span className="font-semibold">Rating:</span> {item.vote_average}
                                            </p>
                                            <p className="text-white text-sm">
                                                <span className="font-semibold">Genre:</span> {getGenreNames(item.genre_ids).join(", ")}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            {/* Carousel Navigation Buttons */}
            <CarouselPrevious className="absolute left-80 top-1/2 -translate-y-1/2 z-50 bg-black text-white p-2 rounded-full hover:bg-gray-200" />
            <CarouselNext className="absolute right-80 top-1/2 -translate-y-1/2 z-50 bg-black text-white p-2 rounded-full hover:bg-gray-200" />
        </Carousel>
    );
}
