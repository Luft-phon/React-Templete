import MovieCard from "../component/MovieCard";

function Home() {
    const movies = [
        { id: 1, title: "John Wick", release_date: "2024" },
        { id: 2, title: "Nha Gia Tien", release_date: "2027" },
        { id: 3, title: "HIEUTHUHAI", release_date: "2014" },
        { id: 4, title: "Mission Impossible", release_date: "2022" },
        { id: 5, title: "Phom Mai", release_date: "2021" }
    ]; // display dynamically how many ever movies do we have

    const handleSearch = () => {

    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies ..." className="search-input" />
            </form>
            <div className="movie-grid">
                {/* .map để lặp và trả về 1 mảng */}
                {movies.map((movie) =>(<MovieCard movie={movie} key={movie.id}/>))}   
            </div>
        </div>
    )
}

export default Home