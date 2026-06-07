import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { FlaskConical, Check, X, RefreshCw, Award } from 'lucide-react'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const TestSystem: React.FC = () => {
  const { addTestResult, testResults } = useStore()
  const [selectedTest, setSelectedTest] = useState<string | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [testCompleted, setTestCompleted] = useState(false)

  const tests = {
    'choch-bos': {
      title: 'CHoCH va BOS',
      questions: [
        {
          id: 1,
          question: 'CHoCH nima?',
          options: [
            'Trend davomi',
            'Trend o\'zgarishi',
            'Sideways harakat',
            'Consolidation'
          ],
          correctAnswer: 1,
          explanation: 'CHoCH (Change of Character) - bu market strukturasining o\'zgarishi va trend reversalining birinchi belgisi.'
        },
        {
          id: 2,
          question: 'BOS qachon sodir bo\'ladi?',
          options: [
            'Trend reversal vaqtida',
            'Trend continuation vaqtida',
            'Range vaqtida',
            'Hech qachon'
          ],
          correctAnswer: 1,
          explanation: 'BOS (Break of Structure) mavjud trendning davom etishini va kuchayishini bildiradi.'
        },
        {
          id: 3,
          question: 'CHoCH-dan keyin nima kutish kerak?',
          options: [
            'Darhol entry',
            'Retracement va confirmation',
            'Hech narsa',
            'Stop loss'
          ],
          correctAnswer: 1,
          explanation: 'CHoCH-dan keyin retracement kutib, lower timeframe-da confirmation olib entry qilish kerak.'
        },
        {
          id: 4,
          question: 'Bullish BOS nimani bildiradi?',
          options: [
            'Narx pastlayapti',
            'Narx yuqoriyapti va trend kuchayapti',
            'Trend tugayapti',
            'Range boshlanmoqda'
          ],
          correctAnswer: 1,
          explanation: 'Bullish BOS yuqori trendning davom etishi va kuchayishini ko\'rsatadi.'
        },
        {
          id: 5,
          question: 'CHoCH va BOS orasidagi asosiy farq nima?',
          options: [
            'Farq yo\'q',
            'CHoCH - reversal, BOS - continuation',
            'BOS - reversal, CHoCH - continuation',
            'Ikkalasi ham reversal'
          ],
          correctAnswer: 1,
          explanation: 'CHoCH trend o\'zgarishini (reversal), BOS esa trend davomini (continuation) bildiradi.'
        }
      ]
    },
    'liquidity': {
      title: 'Liquidity Concepts',
      questions: [
        {
          id: 1,
          question: 'Liquidity Pool nima?',
          options: [
            'Stop loss lar to\'plangan zona',
            'Entry zona',
            'Take profit zona',
            'Range zona'
          ],
          correctAnswer: 0,
          explanation: 'Liquidity Pool - bu ko\'plab treyderlarning stop loss buyurtmalari to\'plangan zona.'
        },
        {
          id: 2,
          question: 'Smart Money likvidlikni qanday ishlatadi?',
          options: [
            'Ishlatmaydi',
            'Faqat sotib olish uchun',
            'Retail treyderlarning stop loss-lariga tegib, pozitsiya ochadi',
            'Faqat sotish uchun'
          ],
          correctAnswer: 2,
          explanation: 'Smart Money retail treyderlarning stop loss larini triggerlab, likvidlikdan foydalanib o\'z pozitsiyalarini ochadi.'
        },
        {
          id: 3,
          question: 'Liquidity Sweep dan keyin nima kutiladi?',
          options: [
            'Trend davomi',
            'Teskari yo\'nalishda kuchli harakat',
            'Sideways',
            'Hech narsa'
          ],
          correctAnswer: 1,
          explanation: 'Liquidity Sweep-dan keyin, narx ko\'pincha teskari yo\'nalishda kuchli harakat qiladi.'
        },
        {
          id: 4,
          question: 'Equal highs/lows nima uchun muhim?',
          options: [
            'Muhim emas',
            'Likvidlik to\'plangan joy',
            'Faqat ko\'rsatkich',
            'Technical indicator'
          ],
          correctAnswer: 1,
          explanation: 'Equal highs/lows ortida ko\'plab stop loss lar joylashgan bo\'ladi - bu likvidlik zonasi.'
        },
        {
          id: 5,
          question: 'Liquidity Grab qachon yaxshi signal?',
          options: [
            'Hamma vaqt',
            'HTF bias bilan mos kelganda',
            'Hech qachon',
            'Faqat London session-da'
          ],
          correctAnswer: 1,
          explanation: 'Liquidity Grab Higher Timeframe bias bilan mos kelganda eng kuchli signal bo\'ladi.'
        }
      ]
    },
    'order-blocks': {
      title: 'Order Blocks va FVG',
      questions: [
        {
          id: 1,
          question: 'Order Block nima?',
          options: [
            'Random sham',
            'Institutsional buyurtmalar joylashgan zona',
            'Retail zona',
            'Support/Resistance'
          ],
          correctAnswer: 1,
          explanation: 'Order Block - Smart Money tomonidan katta hajmdagi buyurtmalar joylashtirilgan zona.'
        },
        {
          id: 2,
          question: 'FVG (Fair Value Gap) qanday shakllanadi?',
          options: [
            'Sekin harakatda',
            'Tez va kuchli harakatda, shamlar orasida gap qoladi',
            'Sideways vaqtida',
            'Hech qachon'
          ],
          correctAnswer: 1,
          explanation: 'FVG tez va kuchli price action vaqtida, shamlar orasida bo\'shliq qolganda shakllanadi.'
        },
        {
          id: 3,
          question: 'Order Block-ga retest qachon kutiladi?',
          options: [
            'Hech qachon',
            'Har doim',
            'BOS yoki CHoCH-dan keyin',
            'Faqat Friday'
          ],
          correctAnswer: 2,
          explanation: 'Order Block-ga retest ko\'pincha structure break (BOS/CHoCH)-dan keyin sodir bo\'ladi.'
        },
        {
          id: 4,
          question: 'FVG-dan qanday foydalaniladi?',
          options: [
            'Stop loss uchun',
            'Entry zona sifatida',
            'Profit target sifatida',
            'Ishlatilmaydi'
          ],
          correctAnswer: 1,
          explanation: 'FVG kuchli entry zona hisoblanadi - narx ko\'pincha FVG-ni "fill" qilishga harakat qiladi.'
        },
        {
          id: 5,
          question: 'Bullish Order Block qayerda shakllanadi?',
          options: [
            'Yuqorida',
            'Pastda, narx keskin ko\'tarilishidan oldin',
            'O\'rtada',
            'Hamma joyda'
          ],
          correctAnswer: 1,
          explanation: 'Bullish Order Block narx keskin ko\'tarilishidan oldin, pastki zonada shakllanadi.'
        }
      ]
    }
  }

  const handleSelectTest = (testId: string) => {
    setSelectedTest(testId)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setTestCompleted(false)
  }

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
    setShowResult(true)

    const currentTest = tests[selectedTest as keyof typeof tests]
    const question = currentTest.questions[currentQuestion]

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    const currentTest = tests[selectedTest as keyof typeof tests]
    
    if (currentQuestion < currentTest.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      // Test completed
      setTestCompleted(true)
      
      if (selectedTest) {
        addTestResult({
          topicId: selectedTest,
          score: score,
          totalQuestions: currentTest.questions.length,
          date: new Date().toISOString(),
          type: 'theory'
        })
      }
    }
  }

  const resetTest = () => {
    setSelectedTest(null)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setTestCompleted(false)
  }

  if (!selectedTest) {
    return (
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Test Tizimi</h1>
          <p className="text-gray-400">Bilimingizni sinab ko'ring</p>
        </div>

        {/* Test History */}
        {testResults.length > 0 && (
          <div className="bg-dark-card border border-dark-border rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Test Tarixi</h2>
            <div className="space-y-3">
              {testResults.slice(-5).reverse().map((result, index) => (
                <div key={index} className="flex items-center justify-between bg-dark-hover p-4 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{result.topicId}</p>
                    <p className="text-sm text-gray-400">
                      {new Date(result.date).toLocaleDateString('uz-UZ')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary-blue">
                      {Math.round((result.score / result.totalQuestions) * 100)}%
                    </p>
                    <p className="text-sm text-gray-400">
                      {result.score}/{result.totalQuestions}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Available Tests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(tests).map(([key, test]) => (
            <button
              key={key}
              onClick={() => handleSelectTest(key)}
              className="bg-dark-card border border-dark-border hover:border-primary-blue rounded-xl p-6 text-left transition-all card-hover"
            >
              <FlaskConical className="text-primary-blue mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">{test.title}</h3>
              <p className="text-gray-400">{test.questions.length} ta savol</p>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const currentTest = tests[selectedTest as keyof typeof tests]

  if (testCompleted) {
    const percentage = Math.round((score / currentTest.questions.length) * 100)
    const passed = percentage >= 70

    return (
      <div className="p-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className={`inline-block p-6 rounded-full mb-6 ${
            passed ? 'bg-green-500/10' : 'bg-red-500/10'
          }`}>
            <Award size={64} className={passed ? 'text-primary-green' : 'text-primary-red'} />
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            {passed ? 'Tabriklaymiz!' : 'Qayta urinib ko\'ring'}
          </h1>
          
          <div className="bg-dark-card border border-dark-border rounded-xl p-8 mb-8">
            <p className="text-6xl font-bold text-primary-blue mb-4">{percentage}%</p>
            <p className="text-xl text-gray-300">
              {score} / {currentTest.questions.length} to'g'ri javob
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => handleSelectTest(selectedTest)}
              className="flex-1 bg-primary-blue hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw size={20} />
              <span>Qayta Topshirish</span>
            </button>
            <button
              onClick={resetTest}
              className="flex-1 bg-dark-card border border-dark-border hover:border-primary-blue text-white py-4 rounded-xl font-semibold transition-colors"
            >
              Testlarga Qaytish
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = currentTest.questions[currentQuestion]

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">{currentTest.title}</h1>
            <p className="text-gray-400">
              Savol {currentQuestion + 1} / {currentTest.questions.length}
            </p>
          </div>
          <button
            onClick={resetTest}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕ Yopish
          </button>
        </div>

        {/* Progress */}
        <div className="w-full h-2 bg-dark-border rounded-full mb-8">
          <div
            className="h-full bg-primary-blue rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / currentTest.questions.length) * 100}%` }}
          />
        </div>

        {/* Question */}
        <div className="bg-dark-card border border-dark-border rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-semibold text-white mb-8">{question.question}</h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && handleAnswer(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-xl font-medium transition-all ${
                  showResult
                    ? index === question.correctAnswer
                      ? 'bg-green-500/20 border-2 border-green-500 text-white'
                      : index === selectedAnswer
                      ? 'bg-red-500/20 border-2 border-red-500 text-white'
                      : 'bg-dark-hover border border-dark-border text-gray-400'
                    : 'bg-dark-hover border border-dark-border hover:border-primary-blue text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    showResult && index === question.correctAnswer
                      ? 'bg-primary-green'
                      : showResult && index === selectedAnswer
                      ? 'bg-primary-red'
                      : 'bg-dark-border'
                  }`}>
                    {showResult && index === question.correctAnswer ? (
                      <Check size={18} />
                    ) : showResult && index === selectedAnswer ? (
                      <X size={18} />
                    ) : (
                      String.fromCharCode(65 + index)
                    )}
                  </div>
                  <span>{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="bg-dark-card border border-dark-border rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-primary-blue mb-2">Tushuntirish:</h3>
            <p className="text-gray-300">{question.explanation}</p>
          </div>
        )}

        {/* Next Button */}
        {showResult && (
          <button
            onClick={nextQuestion}
            className="w-full bg-primary-blue hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition-colors"
          >
            {currentQuestion < currentTest.questions.length - 1
              ? 'Keyingi Savol'
              : 'Natijalarni Ko\'rish'}
          </button>
        )}
      </div>
    </div>
  )
}

export default TestSystem
