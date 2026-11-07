import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import LiteraryItemPage from './pages/LiteraryItemPage/LiteraryItemPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/poems" element={<CategoryPage />} />
      <Route path="/verses" element={<CategoryPage />} />
      <Route path="/quotations" element={<CategoryPage />} />
      <Route path="/pastimes-stories" element={<CategoryPage />} />
      <Route path="/item/:id" element={<LiteraryItemPage />} />
    </Routes>
  )
}

export default App