import { Link } from 'react-router-dom'
import type { LiteraryItem } from '../../data/mockData'
import './ResultCard.css'

interface ResultCardProps {
  item: LiteraryItem
  returnState?: {
    searchQuery: string
    currentPage: number
  }
}

function ResultCard({ item, returnState }: ResultCardProps) {
  return (
    <article className="result-card">
      <div className="result-card-heading">
        <span className="result-category">{item.category}</span>

        {item.subcategory && (
          <span className="result-subcategory">{item.subcategory}</span>
        )}
      </div>

      <p className="result-quote">{item.text}</p>

      {item.tags.length > 0 && (
        <div className="result-tags">
          {item.tags.map((tag) => (
            <span className="result-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="result-details">
        <p><strong>Author:</strong> {item.author}</p>
        <p>
          <strong>Source:</strong>{' '}
          {item.sourceUrl ? (
            <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">
              {item.source}
            </a>
          ) : item.source}
        </p>
      </div>

      <Link
        to={`/item/${item.id}`}
        state={returnState}
        className="read-more"
      >
        Read More →
      </Link>
    </article>
  )
}

export default ResultCard