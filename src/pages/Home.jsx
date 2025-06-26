import { useState } from "react";
import MovieCard from "../component/MovieCard";

function Home() {
  
    const movies = [
        { id: 1, title: "John Wick", release_date: "2024" },
        { id: 2, title: "Nha Gia Tien", release_date: "2027" },
        { id: 3, title: "HIEUTHUHAI", release_date: "2014" },
        { id: 4, title: "Mission Impossible", release_date: "2022" },
        { id: 5, title: "Phom Mai", release_date: "2021" }
    ]; // display dynamically how many ever movies do we have

    const [search, setSearchQuery] = useState("");  //khởi tạo useState

    const handleSearch = (e) => {

        alert(search);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input value={search} onChange={(e) => setSearchQuery(e.target.value)}  type="text" placeholder="Search for movies ..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movie-grid">
                {/* .map để lặp và trả về 1 mảng */}
                {movies.map((movie) => movie.title.toLowerCase().startsWith(search) &&       // && là điều kiện toán tử
                    (<MovieCard movie={movie} key={movie.id}/>))}   
            </div>
        </div>
    )
}

export default Home