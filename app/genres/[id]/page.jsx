import { getGenreById, getMoviesByGenre } from "@/lib/data"
import Link from "next/link"
import { notFound } from "next/navigation"

// Server-Side Rendering (SSR)
export const dynamic = "force-dynamic"

export default function GenreMoviesPage({ params }) {
  const genre = getGenreById(params.id)

  if (!genre) {
    notFound()
  }

  const movies = getMoviesByGenre(genre.id)

  return (
    <div>
      <h1>{genre.name} Movies</h1>

      {movies.length > 0 ? (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-card-content">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p className="rating">Rating: {movie.rating}/10</p>
                <Link href={`/movies/${movie.id}`} className="btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found in this genre.</p>
      )}

      <div style={{ marginTop: "2rem" }}>
        <Link href="/genres" className="btn btn-secondary">
          Back to Genres
        </Link>
      </div>
    </div>
  )
}
