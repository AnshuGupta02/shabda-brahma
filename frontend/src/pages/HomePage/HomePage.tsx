import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import ResultCard from '../../components/ResultCard/ResultCard'
import ExploreCard from '../../components/ExploreCard/ExploreCard'

import { mockData } from '../../data/mockData'

import './HomePage.css'

const RESULTS_PER_PAGE = 12

const categories = [
  {
    title: 'Poems',
    description: 'Explore poems on devotion, philosophy, love and life.',
    path: '/poems',
  },
  {
    title: 'Verses',
    description: 'Discover verses from scriptures and classical literature.',
    path: '/verses',
  },
  {
    title: 'Quotations',
    description: 'Read memorable thoughts, reflections and timeless wisdom.',
    path: '/quotations',
  },
  {
    title: 'Pastimes & Stories',
    description: 'Explore stories, historical accounts and inspiring narratives.',
    path: '/pastimes-stories',
  },
]

function getPageNumbers(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const pages: (number | '...')[] = [1]

  if (currentPage > 3) {
    pages.push('...')
  }

  const startPage = Math.max(2, currentPage - 1)
  const endPage = Math.min(totalPages - 1, currentPage + 1)

  for (let page = startPage; page <= endPage; page++) {
    pages.push(page)
  }

  if (currentPage < totalPages - 2) {
    pages.push('...')
  }

  pages.push(totalPages)

  return pages
}

function HomePage() {
const location = useLocation()

const navigationState = location.state as {
  searchQuery?: string
  currentPage?: number
} | null

const [searchQuery, setSearchQuery] = useState(
  navigationState?.searchQuery ?? '',
)

const [currentPage, setCurrentPage] = useState(
  navigationState?.currentPage ?? 1,
)

const navigate = useNavigate()

  const filteredItems = mockData.filter((item) => {
    const searchableContent = [
      item.text,
      item.author,
      item.source,
      item.category,
      item.subcategory,
      ...item.tags,
    ]
      .join(' ')
      .toLowerCase()

    return searchableContent.includes(searchQuery.toLowerCase())
  })

  const totalPages = Math.ceil(filteredItems.length / RESULTS_PER_PAGE)

  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE

  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + RESULTS_PER_PAGE,
  )

  const handleSearch = (query: string) => {
    setSearchQuery(query.trim())
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)

    document.querySelector('.search-results')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="app">
      <Navbar />

      <section className="hero">
        <p className="hero-subtitle">
          A Literary Collection from the Lectures of Indradyumna Swami
        </p>

        <h1>Śabda Brahma</h1>

        <p className="hero-description">
          Discover the words behind the wisdom. Explore a collection of poems,
          verses, quotations and stories from timeless literary traditions.
        </p>

<SearchBar
  onSearch={handleSearch}
  initialQuery={searchQuery}
/>

        <p className="search-hint">
          Search by words, authors, books or topics
        </p>
      </section>

      {searchQuery && (
        <section className="search-results">
          <div className="section-heading">
            <h2>Search Results</h2>
            <p>
              {filteredItems.length} items found for "{searchQuery}"
            </p>
          </div>

          {filteredItems.length > 0 ? (
            <>
              <p className="results-count">
                Showing {startIndex + 1}–
                {Math.min(startIndex + RESULTS_PER_PAGE, filteredItems.length)}{' '}
                of {filteredItems.length} results
              </p>

              <div className="results-grid">
{paginatedItems.map((item) => (
  <ResultCard
    key={item.id}
    item={item}
    returnState={{
      searchQuery,
      currentPage,
    }}
  />
))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    type="button"
                    className="pagination-arrow"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>

                  <div className="pagination-pages">
                    {getPageNumbers(currentPage, totalPages).map(
                      (page, index) =>
                        page === '...' ? (
                          <span
                            className="pagination-ellipsis"
                            key={`ellipsis-${index}`}
                          >
                            ...
                          </span>
                        ) : (
                          <button
                            type="button"
                            key={page}
                            className={`pagination-number ${
                              currentPage === page ? 'active' : ''
                            }`}
                            onClick={() => handlePageChange(page)}
                            aria-current={
                              currentPage === page ? 'page' : undefined
                            }
                          >
                            {page}
                          </button>
                        ),
                    )}
                  </div>

                  <button
                    type="button"
                    className="pagination-arrow"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="no-results">
              <h3>No results found</h3>
              <p>Try searching with different words or topics.</p>
            </div>
          )}
        </section>
      )}

      <section className="explore-section" id="explore">
        <div className="section-heading">
          <h2>Explore the Collection</h2>
          <p>Browse the collection by literary category.</p>
        </div>

        <div className="explore-grid">
          {categories.map((category) => (
            <ExploreCard
              key={category.title}
              title={category.title}
              description={category.description}
              onClick={() => navigate(category.path)}
            />
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>About Śabda Brahma</h2>

        <p>
          Śabda Brahma is a growing literary collection of poems, verses,
          quotations and stories shared or referenced in the lectures of
          Indradyumna Swami. It brings together literary works and their
          sources in one searchable archive.
        </p>
      </section>

      <footer className="app-footer">
        <span>Śabda Brahma</span>
        <p>Discover the words behind the wisdom.</p>
      </footer>
    </div>
  )
}

export default HomePage