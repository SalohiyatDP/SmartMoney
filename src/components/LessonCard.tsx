import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Circle, ChevronRight } from 'lucide-react'
import ProgressBar from './ProgressBar'

interface LessonCardProps {
  id: string
  title: string
  description: string
  progress: number
  completed: boolean
}

const LessonCard: React.FC<LessonCardProps> = ({
  id,
  title,
  description,
  progress,
  completed,
}) => {
  return (
    <Link
      to={`/lesson/${id}`}
      className="block bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary-blue transition-all card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <div className="ml-4">
          {completed ? (
            <CheckCircle className="text-primary-green" size={24} />
          ) : (
            <Circle className="text-gray-600" size={24} />
          )}
        </div>
      </div>

      <ProgressBar progress={progress} showLabel={false} className="mb-4" />

      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">
          {completed ? 'Tugallangan' : 'Davom etish'}
        </span>
        <ChevronRight className="text-primary-blue" size={18} />
      </div>
    </Link>
  )
}

export default LessonCard
