import { getAllGenres } from "@/lib/data"
import Link from "next/link"

// Server-Side Rendering (SSR) with getServerSideProps
export const dynamic = "force-dynamic"

export default function GenresPage() {
  const genres = getAllGenres()

  return (
    <div>
      <h1>Browse by Genre</h1>

      <div className="card-grid">
        {genres.map((genre) => (
          <Link key={genre.id} href={`/genres/${genre.id}`} className="card">
            <h3>{genre.name}</h3>
            <p>Explore movies in this genre</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
