import { getTrendingMovies } from "@/lib/data"
import Link from "next/link"

// Static Generation (SSG) with getStaticProps
export async function generateStaticParams() {
  return {}
}

export default function Home() {
  const trendingMovies = getTrendingMovies()

  return (
    <div>
      <section className="hero">
        <h1>Welcome to Movie House</h1>
        <p>Your ultimate destination for movie information</p>
        <Link href="/genres" className="btn">
          Browse Genres
        </Link>
      </section>

      <section>
        <h2>Trending Movies</h2>
        <div className="movie-grid">
          {trendingMovies.map((movie) => (
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
      </section>
    </div>
  )
}
