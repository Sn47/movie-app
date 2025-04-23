import { getMovieById, getGenreById, getDirectorById, getAllMovies } from "@/lib/data"
import Link from "next/link"
import { notFound } from "next/navigation"

// Static Generation with dynamic routes using getStaticPaths
export async function generateStaticParams() {
  const movies = getAllMovies()
  return movies.map((movie) => ({
    id: movie.id,
  }))
}

export default function MoviePage({ params }) {
  const movie = getMovieById(params.id)

  if (!movie) {
    notFound()
  }

  const genre = getGenreById(movie.genreId)
  const director = getDirectorById(movie.directorId)

  return (
    <div className="movie-details">
      <div className="movie-poster">
        {/* Placeholder for movie poster */}
        <div
          style={{
            backgroundColor: "#ddd",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <span>Movie Poster</span>
        </div>
      </div>

      <div className="movie-info">
        <h1>{movie.title}</h1>

        <div className="movie-meta">
          <span>{movie.releaseYear}</span>
          <span>{genre?.name}</span>
          <span>Rating: {movie.rating}/10</span>
        </div>

        <p>
          <strong>Director:</strong> <Link href={`/movies/${movie.id}/director`}>{director?.name}</Link>
        </p>

        <h2>Overview</h2>
        <p>{movie.description}</p>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/movies" className="btn btn-secondary">
            Back to Movies
          </Link>
        </div>
      </div>
    </div>
  )
}
