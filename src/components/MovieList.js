import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import MovieListItem from "./MovieListItem"
import { movies } from "../data/movies"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MovieList.css"

const MovieList = () => {
    return (<div className="movie-list">
        <Swiper
            slidesPerView={7}
            spaceBetween={5}
            slidesPerGroup={7}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            speed={1000}
        >
            {movies.map((movie, i) => <SwiperSlide key={i}><MovieListItem movie={movie} /></SwiperSlide>)}
        </Swiper>
    </div>)
}
// [<MovieListItem movie={movies[0]} />, <MovieListItem movie={movies[1]} />, <MovieListItem movie={movies[2]} />, ...]
export default MovieList