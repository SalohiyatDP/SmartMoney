import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import LessonCard from '../components/LessonCard'
import { Search, Filter } from 'lucide-react'

const Library: React.FC = () => {
  const { topics } = useStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<'all' | 'completed' | 'in-progress'>('all')

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())

    if (filter === 'completed') {
      return matchesSearch && topic.completed
    } else if (filter === 'in-progress') {
      return matchesSearch && !topic.completed && topic.progress > 0
    }
    return matchesSearch
  })

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Darslar Kutubxonasi</h1>
        <p className="text-gray-400">
          {topics.length} ta to'liq SMC/ICT darsi
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Darslarni qidiring..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue transition-colors"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-xl font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary-blue text-white'
                : 'bg-dark-card text-gray-400 border border-dark-border hover:border-primary-blue'
            }`}
          >
            Barchasi
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-6 py-3 rounded-xl font-medium transition-colors ${
              filter === 'in-progress'
                ? 'bg-primary-blue text-white'
                : 'bg-dark-card text-gray-400 border border-dark-border hover:border-primary-blue'
            }`}
          >
            Jarayonda
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-6 py-3 rounded-xl font-medium transition-colors ${
              filter === 'completed'
                ? 'bg-primary-blue text-white'
                : 'bg-dark-card text-gray-400 border border-dark-border hover:border-primary-blue'
            }`}
          >
            Tugallangan
          </button>
        </div>
      </div>

      {/* Lessons Grid */}
      {filteredTopics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map(topic => (
            <LessonCard
              key={topic.id}
              id={topic.id}
              title={topic.title}
              description={topic.description}
              progress={topic.progress}
              completed={topic.completed}
            />
          ))}
        </div>
      ) : (
        <div className="bg-dark-card border border-dark-border rounded-xl p-12 text-center">
          <Filter className="mx-auto mb-4 text-gray-600" size={48} />
          <p className="text-gray-400">Hech narsa topilmadi</p>
          <p className="text-sm text-gray-500 mt-2">
            Qidiruv shartlaringizni o'zgartiring
          </p>
        </div>
      )}

      {/* Progress Summary */}
      <div className="mt-8 bg-dark-card border border-dark-border rounded-xl p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Umumiy Statistika</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-3xl font-bold text-primary-blue">
              {topics.length}
            </p>
            <p className="text-sm text-gray-400 mt-1">Jami Darslar</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-green">
              {topics.filter(t => t.completed).length}
            </p>
            <p className="text-sm text-gray-400 mt-1">Tugallangan</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary-yellow">
              {topics.filter(t => !t.completed && t.progress > 0).length}
            </p>
            <p className="text-sm text-gray-400 mt-1">Jarayonda</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-500">
              {topics.filter(t => t.progress === 0).length}
            </p>
            <p className="text-sm text-gray-400 mt-1">Boshlanmagan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library
