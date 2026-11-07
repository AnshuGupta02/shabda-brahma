
import { useState, type FormEvent } from 'react'

import './SearchBar.css'

interface SearchBarProps {
  placeholder?: string
  initialQuery?: string
  onSearch: (query: string) => void
}

function SearchBar({
  placeholder = 'Search poems, verses, authors, topics...',
  initialQuery = '',
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        aria-label="Search the literary archive"
      />

      <button type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBar
