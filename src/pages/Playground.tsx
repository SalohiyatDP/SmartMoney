import React, { useState } from 'react'
import { useStore } from '../store/useStore'
import { Gamepad2, TrendingUp, TrendingDown, DollarSign } from 'lucide-react'

const Playground: React.FC = () => {
  const { addTrade, updateTrade, trades } = useStore()
  const [currentPrice, setCurrentPrice] = useState(2000)
  const [entry, setEntry] = useState('')
  const [stopLoss, setStopLoss] = useState('')
  const [takeProfit, setTakeProfit] = useState('')
  const [direction, setDirection] = useState<'buy' | 'sell'>('buy')
  const [activeTrade, setActiveTrade] = useState<string | null>(null)

  // Simulate price movement
  const simulatePriceMovement = () => {
    const change = (Math.random() - 0.5) * 10
    setCurrentPrice(prev => Math.max(1800, Math.min(2200, prev + change)))
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      simulatePriceMovement()
      checkActiveTrade()
    }, 1000)

    return () => clearInterval(interval)
  }, [activeTrade])

  const checkActiveTrade = () => {
    if (!activeTrade) return

    const trade = trades.find(t => t.id === activeTrade)
    if (!trade || trade.result !== 'pending') return

    if (direction === 'buy') {
      if (currentPrice >= trade.tp) {
        // Take Profit hit
        const profit = trade.tp - trade.entry
        updateTrade(activeTrade, { result: 'win', profit })
        setActiveTrade(null)
      } else if (currentPrice <= trade.sl) {
        // Stop Loss hit
        const profit = trade.sl - trade.entry
        updateTrade(activeTrade, { result: 'loss', profit })
        setActiveTrade(null)
      }
    } else {
      if (currentPrice <= trade.tp) {
        // Take Profit hit
        const profit = trade.entry - trade.tp
        updateTrade(activeTrade, { result: 'win', profit })
        setActiveTrade(null)
      } else if (currentPrice >= trade.sl) {
        // Stop Loss hit
        const profit = trade.entry - trade.sl
        updateTrade(activeTrade, { result: 'loss', profit })
        setActiveTrade(null)
      }
    }
  }

  const handlePlaceTrade = () => {
    const entryPrice = parseFloat(entry)
    const sl = parseFloat(stopLoss)
    const tp = parseFloat(takeProfit)

    if (!entryPrice || !sl || !tp) {
      alert('Barcha maydonlarni to\'ldiring!')
      return
    }

    // Validate
    if (direction === 'buy' && (sl >= entryPrice || tp <= entryPrice)) {
      alert('Buy uchun: SL < Entry < TP bo\'lishi kerak!')
      return
    }

    if (direction === 'sell' && (sl <= entryPrice || tp >= entryPrice)) {
      alert('Sell uchun: TP < Entry < SL bo\'lishi kerak!')
      return
    }

    const newTrade = {
      id: Date.now().toString(),
      entry: entryPrice,
      sl,
      tp,
      result: 'pending' as const,
      profit: 0,
      date: new Date().toISOString()
    }

    addTrade(newTrade)
    setActiveTrade(newTrade.id)

    // Clear inputs
    setEntry('')
    setStopLoss('')
    setTakeProfit('')
  }

  const completedTrades = trades.filter(t => t.result !== 'pending')
  const winningTrades = completedTrades.filter(t => t.result === 'win')
  const losingTrades = completedTrades.filter(t => t.result === 'loss')
  const winRate = completedTrades.length > 0
    ? Math.round((winningTrades.length / completedTrades.length) * 100)
    : 0

  const totalProfit = completedTrades.reduce((sum, t) => sum + t.profit, 0)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Trading Playground</h1>
        <p className="text-gray-400">Virtual trading amaliyoti</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trading Panel */}
        <div className="lg:col-span-2">
          {/* Price Chart */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">XAUUSD (Simulated)</h2>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary-blue">${currentPrice.toFixed(2)}</p>
                <p className="text-sm text-gray-400">Real-time simulation</p>
              </div>
            </div>

            {/* Simple Chart */}
            <div className="bg-dark-bg border border-dark-border rounded-xl p-8">
              <div className="h-64 flex items-end justify-center">
                <div className="text-gray-500 text-center">
                  <Gamepad2 size={48} className="mx-auto mb-4" />
                  <p>Narx real vaqt rejimida o'zgarmoqda</p>
                  <p className="text-sm mt-2">Trade ochib, natijani kuzating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trade Form */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Yangi Trade</h2>

            {/* Direction */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setDirection('buy')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                  direction === 'buy'
                    ? 'bg-primary-green text-white'
                    : 'bg-dark-hover text-gray-400'
                }`}
              >
                BUY
              </button>
              <button
                onClick={() => setDirection('sell')}
                className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                  direction === 'sell'
                    ? 'bg-primary-red text-white'
                    : 'bg-dark-hover text-gray-400'
                }`}
              >
                SELL
              </button>
            </div>

            {/* Inputs */}
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Entry Price</label>
                <input
                  type="number"
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  placeholder={currentPrice.toFixed(2)}
                  className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-white focus:outline-none focus:border-primary-blue"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Stop Loss</label>
                <input
                  type="number"
                  value={stopLoss}
                  onChange={(e) => setStopLoss(e.target.value)}
                  placeholder="1980.00"
                  className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-white focus:outline-none focus:border-primary-blue"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Take Profit</label>
                <input
                  type="number"
                  value={takeProfit}
                  onChange={(e) => setTakeProfit(e.target.value)}
                  placeholder="2020.00"
                  className="w-full px-4 py-3 bg-dark-hover border border-dark-border rounded-xl text-white focus:outline-none focus:border-primary-blue"
                />
              </div>
            </div>

            <button
              onClick={handlePlaceTrade}
              disabled={!!activeTrade}
              className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                activeTrade
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  : 'bg-primary-blue hover:bg-blue-600 text-white'
              }`}
            >
              {activeTrade ? 'Trade Faol...' : 'Trade Ochish'}
            </button>
          </div>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          {/* Active Trade */}
          {activeTrade && (
            <div className="bg-dark-card border border-primary-blue rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Faol Trade</h3>
              {(() => {
                const trade = trades.find(t => t.id === activeTrade)
                if (!trade) return null

                const currentPL = direction === 'buy'
                  ? currentPrice - trade.entry
                  : trade.entry - currentPrice

                return (
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Direction:</span>
                      <span className={`font-semibold ${
                        direction === 'buy' ? 'text-primary-green' : 'text-primary-red'
                      }`}>
                        {direction.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry:</span>
                      <span className="text-white">${trade.entry.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Current P/L:</span>
                      <span className={`font-semibold ${
                        currentPL >= 0 ? 'text-primary-green' : 'text-primary-red'
                      }`}>
                        ${currentPL.toFixed(2)}
                      </span>
                    </div>
                  </div>
                )
              })()}
            </div>
          )}

          {/* Stats */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Statistika</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Jami Trades:</span>
                <span className="text-2xl font-bold text-white">
                  {completedTrades.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Win Rate:</span>
                <span className="text-2xl font-bold text-primary-green">
                  {winRate}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Total P/L:</span>
                <span className={`text-2xl font-bold ${
                  totalProfit >= 0 ? 'text-primary-green' : 'text-primary-red'
                }`}>
                  ${totalProfit.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Recent Trades */}
          <div className="bg-dark-card border border-dark-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Oxirgi Trades</h3>
            <div className="space-y-3">
              {completedTrades.slice(-5).reverse().map((trade) => (
                <div
                  key={trade.id}
                  className={`p-3 rounded-lg ${
                    trade.result === 'win'
                      ? 'bg-green-500/10 border border-green-500/30'
                      : 'bg-red-500/10 border border-red-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-semibold ${
                      trade.result === 'win' ? 'text-primary-green' : 'text-primary-red'
                    }`}>
                      {trade.result === 'win' ? 'WIN' : 'LOSS'}
                    </span>
                    <span className={`font-semibold ${
                      trade.profit >= 0 ? 'text-primary-green' : 'text-primary-red'
                    }`}>
                      ${trade.profit.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}

              {completedTrades.length === 0 && (
                <p className="text-gray-500 text-center text-sm">
                  Hali trade ochilmagan
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playground
