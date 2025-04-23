import Link from "next/link"
import { notFound } from "next/navigation"

// Catch-all route for help pages
export default function HelpPage({ params }) {
  const slug = params.slug || []

  // Handle different help pages based on the slug
  if (slug.length === 0) {
    // /help
    return (
      <div className="help-content">
        <h1>Help Center</h1>
        <p>Welcome to the Movie House help center. How can we assist you?</p>

        <h2>Help Topics</h2>
        <ul>
          <li>
            <Link href="/help/faqs">Frequently Asked Questions</Link>
          </li>
          <li>
            <Link href="/help/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/help/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    )
  } else if (slug[0] === "faqs") {
    // /help/faqs
    return (
      <div className="help-content">
        <h1>Frequently Asked Questions</h1>

        <h2>What is Movie House?</h2>
        <p>
          Movie House is a web application that allows you to browse, search, and view details about movies, genres, and
          directors.
        </p>

        <h2>How do I search for a movie?</h2>
        <p>You can browse all movies on the Movies page or filter by genre using the dropdown menu.</p>

        <h2>How can I view details about a director?</h2>
        <p>
          You can click on a director's name on a movie details page to view their biography and other movies they've
          directed.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/help" className="btn btn-secondary">
            Back to Help Center
          </Link>
        </div>
      </div>
    )
  } else if (slug[0] === "contact") {
    // /help/contact
    return (
      <div className="help-content">
        <h1>Contact Us</h1>

        <p>Have questions or need assistance? We're here to help!</p>

        <h2>Customer Support</h2>
        <p>Email: support@moviehouse.com</p>
        <p>Phone: (555) 123-4567</p>
        <p>Hours: Monday-Friday, 9am-5pm EST</p>

        <h2>Feedback</h2>
        <p>We value your feedback! Let us know how we can improve Movie House.</p>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/help" className="btn btn-secondary">
            Back to Help Center
          </Link>
        </div>
      </div>
    )
  } else if (slug[0] === "privacy") {
    // /help/privacy
    return (
      <div className="help-content">
        <h1>Privacy Policy</h1>

        <p>Last updated: April 23, 2025</p>

        <h2>Information We Collect</h2>
        <p>
          Movie House collects minimal information necessary to provide our services. We do not sell or share your
          personal data with third parties.
        </p>

        <h2>Cookies</h2>
        <p>We use cookies to enhance your browsing experience and analyze site traffic.</p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/help" className="btn btn-secondary">
            Back to Help Center
          </Link>
        </div>
      </div>
    )
  } else {
    // Handle unknown help pages
    notFound()
  }
}
