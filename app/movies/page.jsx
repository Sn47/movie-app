import MoviesPageClient from "./MoviesPageClient"

// Static Generation (SSG) with getStaticProps
export async function generateStaticParams() {
  return {}
}

export default function MoviesPage({ searchParams }) {
  return <MoviesPageClient searchParams={searchParams} />
}
