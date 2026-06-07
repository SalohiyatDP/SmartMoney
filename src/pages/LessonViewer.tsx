import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import { lessonData } from '../data/lessonContent'
import { ArrowLeft, CheckCircle, ChevronRight, BookOpen } from 'lucide-react'

const LessonViewer: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>()
  const navigate = useNavigate()
  const { setCurrentTopic, updateTopicProgress, completeLesson, topics } = useStore()
  const [scrollProgress, setScrollProgress] = useState(0)

  const lesson = topicId ? lessonData[topicId] : null
  const currentTopic = topics.find(t => t.id === topicId)

  useEffect(() => {
    if (topicId) {
      setCurrentTopic(topicId)
    }

    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)))

      if (topicId && scrollPercent > 5) {
        updateTopicProgress(topicId, Math.round(scrollPercent))
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [topicId])

  if (!lesson || !currentTopic) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <BookOpen className="mx-auto mb-4 text-gray-600" size={64} />
          <p className="text-gray-400">Dars topilmadi</p>
        </div>
      </div>
    )
  }

  const handleComplete = () => {
    if (topicId) {
      completeLesson(topicId)
    }
  }

  const nextLesson = () => {
    const currentIndex = topics.findIndex(t => t.id === topicId)
    if (currentIndex < topics.length - 1) {
      navigate(`/lesson/${topics[currentIndex + 1].id}`)
    }
  }

  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-dark-border z-50">
        <div
          className="h-full bg-primary-blue transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-4xl mx-auto p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/library')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Kutubxonaga qaytish</span>
        </button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{lesson.title}</h1>
          <p className="text-xl text-gray-400">{lesson.shortDescription}</p>
        </div>

        {/* Professional Definition */}
        <section className="mb-12 bg-dark-card border border-dark-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-primary-blue mb-4">
            Professional Ta'rif
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {lesson.professionalDefinition}
          </p>
        </section>

        {/* Simple Definition */}
        <section className="mb-12 bg-dark-card border border-dark-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-primary-green mb-4">
            Oddiy Ta'rif
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {lesson.simpleDefinition}
          </p>
        </section>

        {/* Inner Logic */}
        <section className="mb-12 bg-dark-card border border-dark-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-primary-yellow mb-4">
            Ichki Logika
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {lesson.innerLogic}
          </p>
        </section>

        {/* Smart Money Logic */}
        <section className="mb-12 bg-dark-card border border-dark-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Smart Money Logikasi
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {lesson.smartMoneyLogic}
          </p>
        </section>

        {/* Retail Mistakes */}
        <section className="mb-12 bg-dark-card border border-red-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-primary-red mb-4">
            Retail Treyderlar Xatolari
          </h2>
          <ul className="space-y-3">
            {lesson.retailMistakes.map((mistake, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-red mt-1">✗</span>
                <span className="text-gray-300">{mistake}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Entry Strategy */}
        <section className="mb-12 bg-dark-card border border-dark-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-primary-blue mb-4">
            Entry Strategiyasi
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {lesson.entryStrategy}
          </p>
        </section>

        {/* Stop Loss */}
        <section className="mb-12 bg-dark-card border border-dark-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-primary-red mb-4">
            Stop Loss
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {lesson.stopLoss}
          </p>
        </section>

        {/* Take Profit */}
        <section className="mb-12 bg-dark-card border border-dark-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-primary-green mb-4">
            Take Profit
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {lesson.takeProfit}
          </p>
        </section>

        {/* Risk Management */}
        <section className="mb-12 bg-dark-card border border-dark-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-primary-yellow mb-4">
            Risk Management
          </h2>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {lesson.riskManagement}
          </p>
        </section>

        {/* Key Points */}
        <section className="mb-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-primary-blue/30 rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-primary-blue mb-4">
            Asosiy Fikrlar
          </h2>
          <ul className="space-y-3">
            {lesson.keyPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-blue mt-1">●</span>
                <span className="text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Examples */}
        <section className="mb-12 bg-dark-card border border-dark-border rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-primary-green mb-4">
            Amaliy Misollar
          </h2>
          <div className="space-y-4">
            {lesson.examples.map((example, index) => (
              <div key={index} className="bg-dark-hover p-4 rounded-lg border border-dark-border">
                <p className="text-gray-300">{example}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Complete Button */}
        <div className="flex gap-4 mb-12">
          {!currentTopic.completed && (
            <button
              onClick={handleComplete}
              className="flex-1 flex items-center justify-center gap-3 bg-primary-green hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              <CheckCircle size={24} />
              <span>Darsni Tugallash</span>
            </button>
          )}
          
          <button
            onClick={nextLesson}
            className="flex-1 flex items-center justify-center gap-3 bg-primary-blue hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            <span>Keyingi Dars</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default LessonViewer
