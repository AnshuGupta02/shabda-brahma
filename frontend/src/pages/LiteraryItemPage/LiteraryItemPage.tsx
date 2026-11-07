import { Link, useLocation, useParams } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import { mockData } from '../../data/mockData'

import './LiteraryItemPage.css'

function LiteraryItemPage() {
  const location = useLocation()

  const returnState = location.state as {
    searchQuery?: string
    currentPage?: number
  } | null

  const cameFromSearch = Boolean(returnState?.searchQuery)

  const { id } = useParams()

  const item = mockData.find(
    (entry) => entry.id === Number(id),
  )

  if (!item) {
    return (
      <div className="item-page">
        <Navbar />
        <div className="item-not-found">
          <h2>Item not found</h2>
          <Link to="/">Return to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="item-page">
      <Navbar />

      <main className="item-content">

        {cameFromSearch ? (
          <Link
            to="/"
            state={{
              searchQuery: returnState?.searchQuery,
              currentPage: returnState?.currentPage,
            }}
            className="back-link"
          >
            ← Back to Search Results
          </Link>
        ) : (
          <Link
            to={`/${item.category === 'Pastimes & Stories' ? 'pastimes-stories' : item.category.toLowerCase()}`}
            className="back-link"
          >
            ← Back to {item.category}
          </Link>
        )}

        <div className="item-heading">
          <span className="item-category">{item.category}</span>
          <h1>{item.subcategory}</h1>
        </div>

        <article className="item-text">
          <p>{item.text}</p>
        </article>

        <section className="item-information">
          <h2>About this work</h2>

          <div className="item-detail">
            <strong>Author</strong>
            <span>{item.author || 'Unknown'}</span>
          </div>

          <div className="item-detail">
            <strong>Source</strong>
            <span>{item.source || 'Not specified'}</span>
          </div>

          {item.tags.length > 0 && (
            <div className="item-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}

          {item.sourceUrl && (
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="source-link"
            >
              View Original Source ↗
            </a>
          )}
        </section>
      </main>
    </div>
  )
}

export default LiteraryItemPage