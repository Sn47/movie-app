"use client"
import Link from "next/link"
import useSWR from "swr"
import { notFound } from "next/navigation"

// Client-Side Rendering (CSR) with useSWR
const fetcher = (url) => {
  // In a real app, this would be an API call
  const [type, id] = url.split("/")

  if (type === "director") {
    return import("@/lib/data").then((mod) => mod.getDirectorById(id))
  } else if (type === "movies") {
    return import("@/lib/data").then((mod) => mod.getMoviesByDirector(id))
  }
}

export default function DirectorDetailsPage({ params }) {
  const { data: director, error: directorError, isLoading: directorLoading } = useSWR(`director/${params.id}`, fetcher)

  const { data: movies, error: moviesError, isLoading: moviesLoading } = useSWR(`movies/${params.id}`, fetcher)

  if (directorLoading || moviesLoading) {
    return <div className="loading"></div>
  }

  if (directorError || !director) {
    return notFound()
  }

  return (
    <div>
      <h1>Director: {director.name}</h1>

      <div style={{ margin: "2rem 0" }}>
        <h2>Biography</h2>
        <p>{director.biography}</p>
      </div>

      <div>
        <h2>Movies by {director.name}</h2>
        {moviesError ? (
          <p>Error loading movies</p>
        ) : movies && movies.length > 0 ? (
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
          <p>No movies found for this director.</p>
        )}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Link href="/directors" className="btn btn-secondary">
          Back to Directors
        </Link>
      </div>
    </div>
  )
}
