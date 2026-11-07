import { Link, useLocation } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import ResultCard from '../../components/ResultCard/ResultCard'

import { mockData } from '../../data/mockData'

import './CategoryPage.css'

const categoryDetails: Record<
  string,
  { title: string; description: string }
> = {
  '/poems': {
    title: 'Poems',
    description: 'Explore poems on devotion, philosophy, love and life.',
  },
  '/verses': {
    title: 'Verses',
    description: 'Discover verses from scriptures and classical literature.',
  },
  '/quotations': {
    title: 'Quotations',
    description: 'Read memorable thoughts, reflections and timeless wisdom.',
  },
  '/pastimes-stories': {
    title: 'Pastimes & Stories',
    description: 'Explore stories, historical accounts and inspiring narratives.',
  },
}

function CategoryPage() {
  const location = useLocation()
  const category = categoryDetails[location.pathname]

  const items = mockData.filter(
    (item) => item.category === category?.title,
  )

  if (!category) {
    return <p>Category not found.</p>
  }

  return (
    <div className="category-page">
      <Navbar />

      <section className="category-header">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>

        <h1>{category.title}</h1>
        <p>{category.description}</p>
        <span>{items.length} items</span>
      </section>

      <section className="category-content">
        {items.length > 0 ? (
          <div className="category-grid">
            {items.map((item) => (
              <ResultCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="category-empty">
            <h2>Collection coming soon</h2>
            <p>We're working on adding more entries to this collection.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default CategoryPage