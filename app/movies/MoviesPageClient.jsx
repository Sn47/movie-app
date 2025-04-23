"use client"

import { getAllMovies, getAllGenres } from "@/lib/data"
import Link from "next/link"

export default function MoviesPageClient({ searchParams }) {
  const movies = getAllMovies()
  const genres = getAllGenres()

  // Filter movies by genre if a genre filter is applied
  const filteredMovies = searchParams.genre ? movies.filter((movie) => movie.genreId === searchParams.genre) : movies

  return (
    <div>
      <h1>All Movies</h1>

      <div className="filter-controls">
        <label htmlFor="genre-filter">Filter by Genre:</label>
        <select
          id="genre-filter"
          onChange={(e) => {
            const url = e.target.value ? `/movies?genre=${e.target.value}` : "/movies"
            window.location.href = url
          }}
          value={searchParams.genre || ""}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
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
    </div>
  )
}
