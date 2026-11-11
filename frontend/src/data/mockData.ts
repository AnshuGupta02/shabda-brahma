
export interface LiteraryItem {
  id: number
  text: string
  author: string
  source: string
  sourceUrl?: string
  category: 'Poems' | 'Verses' | 'Quotations' | 'Pastimes & Stories'
  subcategory: string
  tags: string[]
}

export const mockData: LiteraryItem[] = [
  {
    id: 1,
    text: `O Gurudeva, you are the moonlight that illuminates the darkness of my life.

Lost in illusion and ignorance, I wandered without knowing the way.
But the rays of your words awakened within me a deep longing for the nectar held within the two syllables of Krishna's name.

Day and night, your lips softly murmur the holy names of the Lord, tasting the highest nectar of devotion.

The moment your blessed hand rests upon my head, may I behold the divine beauty of the eternal couple.

From forest to forest, from village to village, from city to city, I wander, calling out your name.

O Gurudeva, please be merciful to me.`,
    author: 'Vancharidas',
    source: 'Stimulation for Ecstatic Love Part 203 - Sri Radha’s Chin',
    category: 'Poems',
    subcategory: 'Spiritual Master',
    sourceUrl: 'https://youtu.be/VIBcs6CS3is?si=7UgZ_FADjBtCeroa&t=86',
    tags: ['Guru', 'Prayer', 'Devotion', 'Mercy', 'Longing'],
  },
  {
  id: 2,
  text: `Holding her chin with his finger, Krishna places betel nuts in Radha's mouth while speaking sweetly. Govindadas says Radha feels she is being bathed in nectar that is eternally newer and newer.`,
  author: 'Govindadas',
  source: 'Stimulation for Ecstatic Love Part 203 - Sri Radha’s Chin',
  sourceUrl: 'https://youtu.be/VIBcs6CS3is?si=hMv7f-Q5QXFdPCKo&t=328',
  category: 'Poems',
subcategory: "Śrī Rādhā's Chin",
  tags: ['Radha', 'Krishna', 'Madhurya Rasa', 'Pastimes', 'Chin'],
},
{
  id: 3,
  text: `"Oh Radhe, the Lord took such care in fashioning your beautiful face. But when he fashioned your chin, he must have woven a special spell. For the beauty of your chin holds all your other features under its sway. Shyama, who wanders through the forest, grows and enchants; even Cupid loses all composure when he beholds the beauty of your chin."`,
  author: 'Haridas',
source: 'Stimulation for Ecstatic Love Part 203 - Sri Radha’s Chin',
  sourceUrl: 'https://youtu.be/VIBcs6CS3is?si=M4sGmhvF2qOwb5Ic&t=350',
  category: 'Poems',
subcategory: "Śrī Rādhā's Chin",
  tags: ['Radha', 'Krishna', 'Beauty', 'Love', 'Pastimes', 'Chin'],
},
]