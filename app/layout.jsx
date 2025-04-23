import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Movie House",
  description: "A movie management web application",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container">
            <h1 className="logo">
              <Link href="/">Movie House</Link>
            </h1>
            <nav className="nav">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/movies">Movies</Link>
                </li>
                <li>
                  <Link href="/genres">Genres</Link>
                </li>
                <li>
                  <Link href="/directors">Directors</Link>
                </li>
                <li>
                  <Link href="/help">Help</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="main">
          <div className="container">{children}</div>
        </main>
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} Movie House</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
