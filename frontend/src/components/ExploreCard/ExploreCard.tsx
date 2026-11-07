import './ExploreCard.css'

interface ExploreCardProps {
  title: string
  description: string
  onClick: () => void
}

function ExploreCard({
  title,
  description,
  onClick,
}: ExploreCardProps) {
  return (
    <button
      type="button"
      className="explore-card"
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="explore-card-link">Explore →</span>
    </button>
  )
}

export default ExploreCard