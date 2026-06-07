import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search as SearchIcon, BookOpen, FileText } from 'lucide-react'
import { lessonData } from '../data/lessonContent'

const Search: React.FC = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const searchResults = React.useMemo(() => {
    if (!query.trim()) return []

    const lowerQuery = query.toLowerCase()
    const results: Array<{
      id: string
      title: string
      matches: string[]
      relevance: number
    }> = []

    Object.values(lessonData).forEach((lesson) => {
      const matches: string[] = []
      let relevance = 0

      // Check title
      if (lesson.title.toLowerCase().includes(lowerQuery)) {
        matches.push(`Title: ${lesson.title}`)
        relevance += 10
      }

      // Check professional definition
      if (lesson.professionalDefinition.toLowerCase().includes(lowerQuery)) {
        const index = lesson.professionalDefinition.toLowerCase().indexOf(lowerQuery)
        const snippet = lesson.professionalDefinition.substring(
          Math.max(0, index - 50),
          Math.min(lesson.professionalDefinition.length, index + 150)
        )
        matches.push(`Definition: ...${snippet}...`)
        relevance += 5
      }

      // Check simple definition
      if (lesson.simpleDefinition.toLowerCase().includes(lowerQuery)) {
        const index = lesson.simpleDefinition.toLowerCase().indexOf(lowerQuery)
        const snippet = lesson.simpleDefinition.substring(
          Math.max(0, index - 50),
          Math.min(lesson.simpleDefinition.length, index + 150)
        )
        matches.push(`Simple: ...${snippet}...`)
        relevance += 5
      }

      // Check key points
      lesson.keyPoints.forEach((point) => {
        if (point.toLowerCase().includes(lowerQuery)) {
          matches.push(`Key Point: ${point}`)
          relevance += 3
        }
      })

      // Check examples
      lesson.examples.forEach((example) => {
        if (example.toLowerCase().includes(lowerQuery)) {
          matches.push(`Example: ${example}`)
          relevance += 2
        }
      })

      if (matches.length > 0) {
        results.push({
          id: lesson.id,
          title: lesson.title,
          matches: matches.slice(0, 3), // Show max 3 matches
          relevance
        })
      }
    })

    // Sort by relevance
    return results.sort((a, b) => b.relevance - a.relevance)
  }, [query])

  const highlightQuery = (text: string) => {
    if (!query.trim()) return text

    const regex = new RegExp(`(${query})`, 'gi')
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-primary-blue/30 text-primary-blue px-1 rounded">
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    )
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Qidiruv</h1>
        <p className="text-gray-400">Barcha darslar bo'ylab qidiring</p>
      </div>

      {/* Search Input */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <SearchIcon
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={24}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="BOS, CHoCH, FVG, Liquidity va boshqalarni qidiring..."
            className="w-full pl-16 pr-6 py-5 bg-dark-card border border-dark-border rounded-2xl text-white text-lg placeholder-gray-500 focus:outline-none focus:border-primary-blue transition-colors"
            autoFocus
          />
        </div>

        {/* Search Stats */}
        {query && (
          <div className="mt-4 text-center">
            <p className="text-gray-400">
              <span className="text-primary-blue font-semibold">
                {searchResults.length}
              </span>{' '}
              natija topildi
            </p>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="max-w-4xl mx-auto">
        {!query && (
          <div className="text-center py-16">
            <SearchIcon className="mx-auto mb-4 text-gray-600" size={64} />
            <p className="text-gray-400 text-lg">Qidirishni boshlash uchun yozing</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {['BOS', 'CHoCH', 'FVG', 'Order Block', 'Liquidity'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 bg-dark-card border border-dark-border hover:border-primary-blue rounded-lg text-sm text-gray-300 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {query && searchResults.length === 0 && (
          <div className="text-center py-16">
            <FileText className="mx-auto mb-4 text-gray-600" size={64} />
            <p className="text-gray-400 text-lg">Hech narsa topilmadi</p>
            <p className="text-gray-500 text-sm mt-2">
              Boshqa so'z bilan qidirib ko'ring
            </p>
          </div>
        )}

        {searchResults.length > 0 && (
          <div className="space-y-4">
            {searchResults.map((result) => (
              <div
                key={result.id}
                onClick={() => navigate(`/lesson/${result.id}`)}
                className="bg-dark-card border border-dark-border hover:border-primary-blue rounded-xl p-6 cursor-pointer transition-all card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-blue/10 rounded-xl">
                    <BookOpen className="text-primary-blue" size={24} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {highlightQuery(result.title)}
                    </h3>

                    <div className="space-y-2">
                      {result.matches.map((match, index) => (
                        <div
                          key={index}
                          className="text-sm text-gray-400 bg-dark-hover p-3 rounded-lg"
                        >
                          {highlightQuery(match)}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        {result.matches.length} ta mos kelish
                      </span>
                      <span className="text-xs text-gray-600">•</span>
                      <span className="text-xs text-primary-blue">
                        Darsni o'qish →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Popular Searches */}
      {!query && (
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-xl font-semibold text-white mb-4">Mashhur Qidiruvlar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { term: 'BOS', description: 'Break of Structure' },
              { term: 'CHoCH', description: 'Change of Character' },
              { term: 'FVG', description: 'Fair Value Gap' },
              { term: 'Order Block', description: 'Institutional Orders' },
              { term: 'Liquidity', description: 'Smart Money Liquidity' },
              { term: 'Premium Zone', description: 'Entry Zones' },
              { term: 'Stop Loss', description: 'Risk Management' },
              { term: 'Entry Strategy', description: 'Trade Setup' }
            ].map((item) => (
              <button
                key={item.term}
                onClick={() => setQuery(item.term)}
                className="bg-dark-card border border-dark-border hover:border-primary-blue rounded-xl p-4 text-left transition-all card-hover"
              >
                <p className="font-semibold text-white mb-1">{item.term}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
