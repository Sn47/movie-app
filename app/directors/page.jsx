"use client"
import Link from "next/link"
import useSWR from "swr"

// Client-Side Rendering (CSR) with useSWR
const fetcher = () => {
  // In a real app, this would be an API call
  return import("@/lib/data").then((mod) => mod.getAllDirectors())
}

export default function DirectorsPage() {
  const { data: directors, error, isLoading } = useSWR("directors", fetcher)

  if (isLoading) {
    return <div className="loading"></div>
  }

  if (error) {
    return <div>Error loading directors</div>
  }

  return (
    <div>
      <h1>Directors</h1>

      <div className="card-grid">
        {directors.map((director) => (
          <div key={director.id} className="card">
            <h3>{director.name}</h3>
            <p>{director.biography.substring(0, 100)}...</p>
            <div style={{ marginTop: "1rem" }}>
              <Link href={`/directors/${director.id}`} className="btn">
                View Movies
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
