import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { Target, Check, X, RefreshCw } from 'lucide-react'

type Pattern = 'choch' | 'bos' | 'fvg' | 'ob' | 'liquidity-sweep'

interface SimulatorQuestion {
  id: number
  pattern: Pattern
  description: string
  chartData: number[]
  correctAnswer: string
}

const patterns: Record<Pattern, string> = {
  'choch': 'CHoCH',
  'bos': 'BOS',
  'fvg': 'FVG',
  'ob': 'Order Block',
  'liquidity-sweep': 'Liquidity Sweep'
}

const Simulator: React.FC = () => {
  const { addSimulatorResult, simulatorResults } = useStore()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<Pattern | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  // Generate random questions
  const questions: SimulatorQuestion[] = [
    {
      id: 1,
      pattern: 'choch',
      description: 'Quyidagi grafikda qaysi pattern ko\'rinmoqda?',
      chartData: [100, 105, 103, 108, 106, 102, 98, 95],
      correctAnswer: 'choch'
    },
    {
      id: 2,
      pattern: 'bos',
      description: 'Struktura buzilishini aniqlang:',
      chartData: [100, 102, 104, 106, 108, 110, 112, 115],
      correctAnswer: 'bos'
    },
    {
      id: 3,
      pattern: 'fvg',
      description: 'Fair Value Gap qayerda joylashgan?',
      chartData: [100, 98, 96, 110, 108, 106, 105, 107],
      correctAnswer: 'fvg'
    },
    {
      id: 4,
      pattern: 'ob',
      description: 'Order Block zonasini belgilang:',
      chartData: [100, 95, 90, 92, 95, 98, 102, 105],
      correctAnswer: 'ob'
    },
    {
      id: 5,
      pattern: 'liquidity-sweep',
      description: 'Liquidity Sweep sodir bo\'lganmi?',
      chartData: [100, 102, 101, 98, 95, 93, 98, 102],
      correctAnswer: 'liquidity-sweep'
    }
  ]

  const question = questions[currentQuestion]

  const handleAnswer = (answer: Pattern) => {
    setSelectedAnswer(answer)
    setShowResult(true)

    const isCorrect = answer === question.correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }

    addSimulatorResult({
      pattern: patterns[question.pattern],
      correct: isCorrect,
      date: new Date().toISOString(),
      timeSpent: 0
    })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      // Quiz completed
      setCurrentQuestion(0)
      setScore(0)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const reset = () => {
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
  }

  const accuracy = simulatorResults.length > 0
    ? Math.round((simulatorResults.filter(r => r.correct).length / simulatorResults.length) * 100)
    : 0

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">SMC Simulyator</h1>
        <p className="text-gray-400">Pattern topish amaliyoti</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <p className="text-gray-400 mb-2">Jami Urinishlar</p>
          <p className="text-3xl font-bold text-primary-blue">
            {simulatorResults.length}
          </p>
        </div>
        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <p className="text-gray-400 mb-2">To'g'ri Javoblar</p>
          <p className="text-3xl font-bold text-primary-green">
            {simulatorResults.filter(r => r.correct).length}
          </p>
        </div>
        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <p className="text-gray-400 mb-2">Aniqlik</p>
          <p className="text-3xl font-bold text-primary-yellow">{accuracy}%</p>
        </div>
      </div>

      {/* Question */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            Savol {currentQuestion + 1} / {questions.length}
          </h2>
          <div className="text-sm text-gray-400">
            Ball: {score} / {questions.length}
          </div>
        </div>

        <p className="text-gray-300 mb-8">{question.description}</p>

        {/* Simplified Chart Display */}
        <div className="bg-dark-bg border border-dark-border rounded-xl p-8 mb-8">
          <div className="flex items-end justify-around h-64">
            {question.chartData.map((value, index) => (
              <div
                key={index}
                className="w-12 bg-primary-blue rounded-t-lg transition-all"
                style={{ height: `${(value / 120) * 100}%` }}
              />
            ))}
          </div>
        </div>

        {/* Answer Options */}
        {!showResult ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(patterns).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleAnswer(key as Pattern)}
                className="bg-dark-hover border border-dark-border hover:border-primary-blue text-white py-4 rounded-xl font-semibold transition-all"
              >
                {label}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <div className={`p-6 rounded-xl mb-6 ${
              selectedAnswer === question.correctAnswer
                ? 'bg-green-500/10 border border-green-500/30'
                : 'bg-red-500/10 border border-red-500/30'
            }`}>
              <div className="flex items-center gap-3 mb-2">
                {selectedAnswer === question.correctAnswer ? (
                  <>
                    <Check className="text-primary-green" size={24} />
                    <span className="text-primary-green font-semibold">To'g'ri!</span>
                  </>
                ) : (
                  <>
                    <X className="text-primary-red" size={24} />
                    <span className="text-primary-red font-semibold">Noto'g'ri</span>
                  </>
                )}
              </div>
              <p className="text-gray-300">
                To'g'ri javob: <span className="font-semibold">{patterns[question.correctAnswer as Pattern]}</span>
              </p>
            </div>

            <div className="flex gap-4">
              {currentQuestion < questions.length - 1 ? (
                <button
                  onClick={nextQuestion}
                  className="flex-1 bg-primary-blue hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition-colors"
                >
                  Keyingi Savol
                </button>
              ) : (
                <button
                  onClick={reset}
                  className="flex-1 bg-primary-green hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw size={20} />
                  <span>Qaytadan Boshlash</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Simulator
