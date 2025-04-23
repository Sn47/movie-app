import { getMovieById, getDirectorById, getMoviesByDirector } from "@/lib/data"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function DirectorPage({ params }) {
  const movie = getMovieById(params.id)

  if (!movie) {
    notFound()
  }

  const director = getDirectorById(movie.directorId)

  if (!director) {
    notFound()
  }

  const directorMovies = getMoviesByDirector(director.id)

  return (
    <div>
      <h1>Director: {director.name}</h1>

      <div style={{ margin: "2rem 0" }}>
        <h2>Biography</h2>
        <p>{director.biography}</p>
      </div>

      <div>
        <h2>Movies by {director.name}</h2>
        <div className="movie-grid">
          {directorMovies.map((dirMovie) => (
            <div key={dirMovie.id} className="movie-card">
              <div className="movie-card-content">
                <h3>{dirMovie.title}</h3>
                <p>{dirMovie.description}</p>
                <p className="rating">Rating: {dirMovie.rating}/10</p>
                <Link href={`/movies/${dirMovie.id}`} className="btn">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link href={`/movies/${movie.id}`} className="btn btn-secondary">
          Back to Movie
        </Link>
      </div>
    </div>
  )
}
