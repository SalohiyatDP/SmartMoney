import React from 'react'

interface ProgressBarProps {
  progress: number
  className?: string
  showLabel?: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  className = '', 
  showLabel = true 
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress))

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-2">
        {showLabel && (
          <span className="text-sm text-gray-400">Progress</span>
        )}
        <span className="text-sm font-semibold text-primary-blue">
          {clampedProgress}%
        </span>
      </div>
      <div className="w-full h-2 bg-dark-hover rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-blue to-purple-500 transition-all duration-500 ease-out"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
