import React from 'react'
import { useStore } from '../store/useStore'
import StatCard from '../components/StatCard'
import ProgressBar from '../components/ProgressBar'
import LessonCard from '../components/LessonCard'
import { BookOpen, Target, Trophy, Clock } from 'lucide-react'

const Dashboard: React.FC = () => {
  const { topics, completedTopics, totalProgress, studyTime, testResults, simulatorResults } = useStore()

  const recentLessons = topics
    .filter(t => t.lastAccessed)
    .sort((a, b) => {
      const dateA = a.lastAccessed ? new Date(a.lastAccessed).getTime() : 0
      const dateB = b.lastAccessed ? new Date(b.lastAccessed).getTime() : 0
      return dateB - dateA
    })
    .slice(0, 3)

  const totalTests = testResults.length
  const avgTestScore = testResults.length > 0
    ? Math.round(testResults.reduce((sum, t) => sum + (t.score / t.totalQuestions) * 100, 0) / testResults.length)
    : 0

  const simulatorAccuracy = simulatorResults.length > 0
    ? Math.round((simulatorResults.filter(r => r.correct).length / simulatorResults.length) * 100)
    : 0

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Sizning o'qish statistikangiz</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={BookOpen}
          label="Tugallangan Darslar"
          value={`${completedTopics.length}/${topics.length}`}
          color="blue"
        />
        <StatCard
          icon={Trophy}
          label="Umumiy Progress"
          value={`${totalProgress}%`}
          color="green"
        />
        <StatCard
          icon={Target}
          label="Test O'rtacha"
          value={totalTests > 0 ? `${avgTestScore}%` : '-'}
          color="yellow"
        />
        <StatCard
          icon={Clock}
          label="O'qish Vaqti"
          value={`${Math.floor(studyTime / 60)}s ${studyTime % 60}m`}
          color="red"
        />
      </div>

      {/* Overall Progress */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">Umumiy Progress</h2>
        <ProgressBar progress={totalProgress} showLabel={true} />
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-gray-400">
            {completedTopics.length} ta dars tugallandi
          </span>
          <span className="text-gray-400">
            {topics.length - completedTopics.length} ta dars qoldi
          </span>
        </div>
      </div>

      {/* Recent Lessons */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Oxirgi Darslar</h2>
        {recentLessons.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentLessons.map(lesson => (
              <LessonCard
                key={lesson.id}
                id={lesson.id}
                title={lesson.title}
                description={lesson.description}
                progress={lesson.progress}
                completed={lesson.completed}
              />
            ))}
          </div>
        ) : (
          <div className="bg-dark-card border border-dark-border rounded-xl p-12 text-center">
            <BookOpen className="mx-auto mb-4 text-gray-600" size={48} />
            <p className="text-gray-400">Hali hech qanday dars boshlanmagan</p>
            <p className="text-sm text-gray-500 mt-2">
              Kutubxonaga o'ting va birinchi darsni boshlang!
            </p>
          </div>
        )}
      </div>

      {/* Performance Stats */}
      {(simulatorResults.length > 0 || testResults.length > 0) && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {simulatorResults.length > 0 && (
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Simulyator Natijalari
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Jami urinishlar:</span>
                  <span className="text-white font-semibold">
                    {simulatorResults.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">To'g'ri javoblar:</span>
                  <span className="text-primary-green font-semibold">
                    {simulatorResults.filter(r => r.correct).length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Aniqlik:</span>
                  <span className="text-primary-blue font-semibold">
                    {simulatorAccuracy}%
                  </span>
                </div>
              </div>
            </div>
          )}

          {testResults.length > 0 && (
            <div className="bg-dark-card border border-dark-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Test Natijalari
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Jami testlar:</span>
                  <span className="text-white font-semibold">{totalTests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">O'rtacha ball:</span>
                  <span className="text-primary-green font-semibold">
                    {avgTestScore}%
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Dashboard
