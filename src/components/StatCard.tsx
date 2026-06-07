import React from 'react'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string | number
  color?: 'blue' | 'green' | 'yellow' | 'red'
  className?: string
}

const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  label,
  value,
  color = 'blue',
  className = '',
}) => {
  const colorClasses = {
    blue: 'text-primary-blue bg-blue-500/10',
    green: 'text-primary-green bg-green-500/10',
    yellow: 'text-primary-yellow bg-yellow-500/10',
    red: 'text-primary-red bg-red-500/10',
  }

  return (
    <div className={`bg-dark-card border border-dark-border rounded-xl p-6 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-2">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        <div className={`p-4 rounded-xl ${colorClasses[color]}`}>
          <Icon size={28} />
        </div>
      </div>
    </div>
  )
}

export default StatCard
