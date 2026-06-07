import React, { useState } from 'react'
import { TrendingUp, Clock, Target, DollarSign } from 'lucide-react'

const XAUUSDModule: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<'asian' | 'london' | 'newyork'>('london')

  const sessions = {
    asian: {
      name: 'Asian Session',
      time: '00:00 - 09:00 GMT',
      description: 'Range shakllanish va liquidity yig\'ish sessiyasi',
      characteristics: [
        'Low volatility',
        'Range trading',
        'Liquidity pool shakllanadi',
        'Asian High/Low belgilanadi'
      ],
      strategy: 'Range boundaries lardan bounce kutish'
    },
    london: {
      name: 'London Session',
      time: '08:00 - 17:00 GMT',
      description: 'Eng aktiv va volatil sessiya',
      characteristics: [
        'High volatility',
        'Major moves',
        'Liquidity sweep',
        'Trend boshlanadi'
      ],
      strategy: 'London Open Liquidity Sweep dan foydalanish'
    },
    newyork: {
      name: 'New York Session',
      time: '13:00 - 22:00 GMT',
      description: 'Kuchli price action va reversal imkoniyatlari',
      characteristics: [
        'High volume',
        'Trend continuation yoki reversal',
        'News impact',
        'Major institutional orders'
      ],
      strategy: 'NY Open manipulation va continuation'
    }
  }

  const concepts = [
    {
      title: 'PDH/PDL (Previous Day High/Low)',
      description: 'Oldingi kunning eng yuqori va eng past nuqtalari. Smart Money bu levellardan reaction kutadi.',
      icon: TrendingUp,
      color: 'blue'
    },
    {
      title: 'PWH/PWL (Previous Week High/Low)',
      description: 'Oldingi haftaning eng yuqori va past nuqtalari. Major support/resistance.',
      icon: Target,
      color: 'green'
    },
    {
      title: 'PMH/PML (Previous Month High/Low)',
      description: 'Oldingi oyning high/low. Eng kuchli liquidity zonalari.',
      icon: DollarSign,
      color: 'yellow'
    },
    {
      title: 'Kill Zones',
      description: 'London va New York sessiya boshlanishidagi birinchi 2-3 soat. Eng kuchli harakatlar.',
      icon: Clock,
      color: 'red'
    }
  ]

  const colorClasses = {
    blue: 'text-primary-blue bg-blue-500/10',
    green: 'text-primary-green bg-green-500/10',
    yellow: 'text-primary-yellow bg-yellow-500/10',
    red: 'text-primary-red bg-red-500/10'
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">XAUUSD Maxsus Moduli</h1>
        <p className="text-gray-400">Gold trading bo'yicha maxsus strategiyalar</p>
      </div>

      {/* Key Concepts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {concepts.map((concept, index) => (
          <div key={index} className="bg-dark-card border border-dark-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-xl ${colorClasses[concept.color as keyof typeof colorClasses]}`}>
                <concept.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {concept.title}
                </h3>
                <p className="text-gray-400 text-sm">{concept.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sessions */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-6">Trading Sessiyalari</h2>

        {/* Session Tabs */}
        <div className="flex gap-2 mb-6">
          {Object.entries(sessions).map(([key, session]) => (
            <button
              key={key}
              onClick={() => setSelectedSession(key as any)}
              className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                selectedSession === key
                  ? 'bg-primary-blue text-white'
                  : 'bg-dark-hover text-gray-400 hover:text-white'
              }`}
            >
              {session.name}
            </button>
          ))}
        </div>

        {/* Session Details */}
        <div className="bg-dark-hover border border-dark-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">
              {sessions[selectedSession].name}
            </h3>
            <span className="text-primary-blue font-mono">
              {sessions[selectedSession].time}
            </span>
          </div>

          <p className="text-gray-300 mb-6">{sessions[selectedSession].description}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3">Xususiyatlari:</h4>
            <ul className="space-y-2">
              {sessions[selectedSession].characteristics.map((char, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="text-primary-blue">•</span>
                  {char}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-dark-card border border-primary-blue/30 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-primary-blue mb-2">Strategiya:</h4>
            <p className="text-gray-300">{sessions[selectedSession].strategy}</p>
          </div>
        </div>
      </div>

      {/* XAUUSD Strategy */}
      <div className="bg-dark-card border border-dark-border rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-white mb-6">XAUUSD Trading Strategiyasi</h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-dark-hover border border-dark-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue text-white font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  HTF Market Structure Aniqlang
                </h3>
                <p className="text-gray-300">
                  Daily va 4H timeframe-da trend yo'nalishini aniqlang. CHoCH yoki BOS bormi tekshiring.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-dark-hover border border-dark-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue text-white font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  PDH/PDL va PWH/PWL Belgilang
                </h3>
                <p className="text-gray-300">
                  Bu levellar liquidity zonalari. Smart Money bu zonalarda harakat qiladi.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-dark-hover border border-dark-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Kill Zone Kutish
                </h3>
                <p className="text-gray-300">
                  London Open (08:00-11:00 GMT) yoki NY Open (13:00-16:00 GMT) vaqtida trade qiling.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-dark-hover border border-dark-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue text-white font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Liquidity Sweep + FVG Entry
                </h3>
                <p className="text-gray-300">
                  Liquidity sweep sodir bo'lgandan keyin, FVG yoki Order Block-ga retracement kutib entry oling.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-dark-hover border border-dark-border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-blue text-white font-bold">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Risk Management
                </h3>
                <p className="text-gray-300">
                  SL: Structure invalidation nuqtasida. TP: Keyingi liquidity pool (PDH/PDL). R:R minimal 1:3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-primary-yellow mb-4">⚠️ Muhim Maslahatlar</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-2 text-gray-300">
            <span className="text-primary-yellow">•</span>
            <span>XAUUSD juda volatil - risk managementni qattiq saqlang</span>
          </li>
          <li className="flex items-start gap-2 text-gray-300">
            <span className="text-primary-yellow">•</span>
            <span>News release vaqtlarida ehtiyot bo'ling (NFP, FOMC, CPI)</span>
          </li>
          <li className="flex items-start gap-2 text-gray-300">
            <span className="text-primary-yellow">•</span>
            <span>Kill Zone tashqarisida trade qilmang</span>
          </li>
          <li className="flex items-start gap-2 text-gray-300">
            <span className="text-primary-yellow">•</span>
            <span>HTF bias bilan mos keluvchi setuplarni qidiring</span>
          </li>
          <li className="flex items-start gap-2 text-gray-300">
            <span className="text-primary-yellow">•</span>
            <span>Asian Session range boundaries muhim - ularni belgilang</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default XAUUSDModule
