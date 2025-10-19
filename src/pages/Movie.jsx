import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  { id: 1, title: "Doctor Strange", time: 115, genres: ["Action", "Adventure", "Fantasy"] },
  { id: 2, title: "Trolls", time: 92, genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"] },
  { id: 3, title: "Jack Reacher: Never Go Back", time: 118, genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"] }
];

function Movie() {
  const params = useParams();
  const movie = movies.find(m => m.id === parseInt(params.id)) || {};

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres && movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
};

export default Movie;
