import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { Award, Download, Calendar, CheckCircle } from 'lucide-react'

const Certificate: React.FC = () => {
  const { topics, completedTopics, totalProgress } = useStore()
  const [userName, setUserName] = useState('')
  const [showCertificate, setShowCertificate] = useState(false)

  const allCompleted = completedTopics.length === topics.length
  const completionDate = new Date().toLocaleDateString('uz-UZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const handleGenerateCertificate = () => {
    if (!userName.trim()) {
      alert('Ismingizni kiriting!')
      return
    }
    setShowCertificate(true)
  }

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF
    alert('PDF yuklab olish funksiyasi keyinchalik qo\'shiladi!')
  }

  if (!allCompleted) {
    return (
      <div className="p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Award className="mx-auto mb-4 text-gray-600" size={64} />
            <h1 className="text-3xl font-bold text-white mb-2">Sertifikat</h1>
            <p className="text-gray-400">Kursni tugallab sertifikat oling</p>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-xl p-8 mb-8">
            <h2 className="text-xl font-semibold text-white mb-6">
              Kurs Progress
            </h2>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Umumiy Progress</span>
                <span className="text-primary-blue font-semibold">{totalProgress}%</span>
              </div>
              <div className="w-full h-3 bg-dark-hover rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary-blue to-purple-500 transition-all duration-500"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-dark-hover p-4 rounded-xl">
                <p className="text-gray-400 mb-2">Tugallangan</p>
                <p className="text-3xl font-bold text-primary-green">
                  {completedTopics.length}
                </p>
              </div>
              <div className="bg-dark-hover p-4 rounded-xl">
                <p className="text-gray-400 mb-2">Qolgan</p>
                <p className="text-3xl font-bold text-primary-yellow">
                  {topics.length - completedTopics.length}
                </p>
              </div>
            </div>

            <div className="bg-dark-hover border border-dark-border rounded-xl p-4">
              <p className="text-gray-300 mb-3">Sertifikat olish uchun:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  {completedTopics.length === topics.length ? (
                    <CheckCircle className="text-primary-green" size={18} />
                  ) : (
                    <div className="w-[18px] h-[18px] rounded-full border-2 border-gray-600" />
                  )}
                  <span>Barcha darslarni tugatish</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Incomplete Lessons */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Tugallanmagan Darslar
            </h3>
            <div className="space-y-2">
              {topics
                .filter(t => !t.completed)
                .map(topic => (
                  <div
                    key={topic.id}
                    className="flex items-center justify-between bg-dark-hover p-4 rounded-lg"
                  >
                    <span className="text-gray-300">{topic.title}</span>
                    <span className="text-sm text-gray-500">{topic.progress}%</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!showCertificate) {
    return (
      <div className="p-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-6 bg-green-500/10 rounded-full mb-6">
              <Award className="text-primary-green" size={64} />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Tabriklaymiz!</h1>
            <p className="text-xl text-gray-400">
              Siz SMC Academy Ultimate kursini muvaffaqiyatli yakunladingiz!
            </p>
          </div>

          <div className="bg-dark-card border border-dark-border rounded-xl p-8 mb-8">
            <h2 className="text-xl font-semibold text-white mb-6">
              Sertifikat Olish
            </h2>

            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-2">
                To'liq Ismingiz
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ismingizni kiriting"
                className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue transition-colors"
              />
            </div>

            <button
              onClick={handleGenerateCertificate}
              className="w-full bg-primary-blue hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition-colors"
            >
              Sertifikat Yaratish
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-primary-blue mb-2">
                {topics.length}
              </p>
              <p className="text-sm text-gray-400">Tugallangan Darslar</p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-primary-green mb-2">100%</p>
              <p className="text-sm text-gray-400">Kurs Progress</p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-primary-yellow mb-2">
                {Math.floor(Math.random() * 50 + 30)}h
              </p>
              <p className="text-sm text-gray-400">O'qish Vaqti</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto">
        {/* Certificate */}
        <div
          id="certificate"
          className="bg-gradient-to-br from-dark-card via-dark-bg to-dark-card border-2 border-primary-blue rounded-2xl p-12 mb-8"
          style={{
            boxShadow: '0 0 60px rgba(59, 130, 246, 0.3)'
          }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-primary-blue/10 rounded-full mb-6">
              <Award className="text-primary-blue" size={64} />
            </div>
            <h1 className="text-4xl font-bold gradient-text mb-4">
              SERTIFIKAT
            </h1>
            <p className="text-xl text-gray-400">
              SMC Academy Ultimate
            </p>
          </div>

          {/* Body */}
          <div className="text-center mb-12">
            <p className="text-gray-400 mb-6">Bu sertifikat tasdiqlaydiki,</p>
            <h2 className="text-5xl font-bold text-white mb-6">{userName}</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Smart Money Concepts (SMC) va Inner Circle Trader (ICT) metodologiyasi bo'yicha
              to'liq o'quv kursini muvaffaqiyatli yakunlagan
            </p>
          </div>

          {/* Topics Completed */}
          <div className="bg-dark-hover/50 border border-dark-border rounded-xl p-6 mb-12">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">
              O'rganilgan Mavzular:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <CheckCircle className="text-primary-green flex-shrink-0" size={16} />
                  <span>{topic.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-8 border-t border-dark-border">
            <div className="text-left">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Calendar size={18} />
                <span>Tugallangan Sana:</span>
              </div>
              <p className="text-white font-semibold">{completionDate}</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-px bg-gray-600 mb-2"></div>
              <p className="text-sm text-gray-500">SMC Academy</p>
              <p className="text-xs text-gray-600">Ultimate Edition</p>
            </div>

            <div className="text-right">
              <div className="text-gray-400 mb-2">Sertifikat ID:</div>
              <p className="text-white font-mono font-semibold">
                SMC-{Date.now().toString().slice(-8)}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center gap-3 bg-primary-green hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition-colors"
          >
            <Download size={20} />
            <span>PDF Yuklab Olish</span>
          </button>
          <button
            onClick={() => setShowCertificate(false)}
            className="px-8 py-4 bg-dark-card border border-dark-border hover:border-primary-blue text-white rounded-xl font-semibold transition-colors"
          >
            Orqaga
          </button>
        </div>

        {/* Note */}
        <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
          <p className="text-yellow-500 text-sm text-center">
            💡 Maslahat: Sertifikatni PDF sifatida saqlang yoki print qiling!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Certificate
