import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Topic {
  id: string
  title: string
  description: string
  completed: boolean
  progress: number
  lastAccessed?: string
}

export interface TestResult {
  topicId: string
  score: number
  totalQuestions: number
  date: string
  type: 'theory' | 'chart' | 'practical'
}

export interface SimulatorResult {
  pattern: string
  correct: boolean
  date: string
  timeSpent: number
}

export interface PlaygroundTrade {
  id: string
  entry: number
  sl: number
  tp: number
  result: 'win' | 'loss' | 'pending'
  profit: number
  date: string
}

interface AppState {
  // Topics
  topics: Topic[]
  completedTopics: string[]
  currentTopic: string | null
  
  // Tests
  testResults: TestResult[]
  
  // Simulator
  simulatorResults: SimulatorResult[]
  
  // Playground
  trades: PlaygroundTrade[]
  
  // User progress
  totalProgress: number
  studyTime: number // in minutes
  
  // Actions
  setCurrentTopic: (topicId: string) => void
  updateTopicProgress: (topicId: string, progress: number) => void
  completeLesson: (topicId: string) => void
  addTestResult: (result: TestResult) => void
  addSimulatorResult: (result: SimulatorResult) => void
  addTrade: (trade: PlaygroundTrade) => void
  updateTrade: (id: string, updates: Partial<PlaygroundTrade>) => void
  addStudyTime: (minutes: number) => void
  resetProgress: () => void
}

const initialTopics: Topic[] = [
  { id: 'choch', title: 'CHoCH (Change of Character)', description: 'Market struktura o\'zgarishi', completed: false, progress: 0 },
  { id: 'bos', title: 'BOS (Break of Structure)', description: 'Struktura sinishi', completed: false, progress: 0 },
  { id: 'sell-momentum', title: 'Sell Momentum', description: 'Sotish momentum strategiyasi', completed: false, progress: 0 },
  { id: 'buy-momentum', title: 'Buy Momentum', description: 'Sotib olish momentum strategiyasi', completed: false, progress: 0 },
  { id: 'liquidity', title: 'Liquidity', description: 'Likvidlik tushunchasi', completed: false, progress: 0 },
  { id: 'liquidity-pool', title: 'Liquidity Pool', description: 'Likvidlik hovuzi', completed: false, progress: 0 },
  { id: 'liquidity-grab', title: 'Liquidity Grab', description: 'Likvidlikni yig\'ish', completed: false, progress: 0 },
  { id: 'liquidity-sweep', title: 'Liquidity Sweep', description: 'Likvidlikni supurish', completed: false, progress: 0 },
  { id: 'institutional-orders', title: 'Institutional Orders', description: 'Institutsional buyurtmalar', completed: false, progress: 0 },
  { id: 'smart-money', title: 'Smart Money', description: 'Aqlli pul kontsepti', completed: false, progress: 0 },
  { id: 'order-block', title: 'Order Block', description: 'Buyurtma bloki', completed: false, progress: 0 },
  { id: 'fair-value-gap', title: 'Fair Value Gap (FVG)', description: 'Adolatli qiymat bo\'shlig\'i', completed: false, progress: 0 },
  { id: 'premium-zone', title: 'Premium Zone', description: 'Premium zonasi', completed: false, progress: 0 },
  { id: 'discount-zone', title: 'Discount Zone', description: 'Chegirma zonasi', completed: false, progress: 0 },
  { id: 'mitigation', title: 'Mitigation', description: 'Yumshatish zonasi', completed: false, progress: 0 },
  { id: 'repricing', title: 'Repricing', description: 'Qayta narxlash', completed: false, progress: 0 },
  { id: 'market-structure', title: 'Market Structure', description: 'Bozor strukturasi', completed: false, progress: 0 },
]

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      topics: initialTopics,
      completedTopics: [],
      currentTopic: null,
      testResults: [],
      simulatorResults: [],
      trades: [],
      totalProgress: 0,
      studyTime: 0,

      setCurrentTopic: (topicId) => {
        set({ currentTopic: topicId })
        const topics = get().topics.map(topic =>
          topic.id === topicId
            ? { ...topic, lastAccessed: new Date().toISOString() }
            : topic
        )
        set({ topics })
      },

      updateTopicProgress: (topicId, progress) => {
        const topics = get().topics.map(topic =>
          topic.id === topicId ? { ...topic, progress } : topic
        )
        set({ topics })
        
        // Calculate total progress
        const totalProgress = Math.round(
          topics.reduce((sum, t) => sum + t.progress, 0) / topics.length
        )
        set({ totalProgress })
      },

      completeLesson: (topicId) => {
        const completedTopics = [...get().completedTopics]
        if (!completedTopics.includes(topicId)) {
          completedTopics.push(topicId)
        }
        
        const topics = get().topics.map(topic =>
          topic.id === topicId
            ? { ...topic, completed: true, progress: 100 }
            : topic
        )
        
        set({ completedTopics, topics })
        
        // Calculate total progress
        const totalProgress = Math.round(
          (completedTopics.length / initialTopics.length) * 100
        )
        set({ totalProgress })
      },

      addTestResult: (result) => {
        set({ testResults: [...get().testResults, result] })
      },

      addSimulatorResult: (result) => {
        set({ simulatorResults: [...get().simulatorResults, result] })
      },

      addTrade: (trade) => {
        set({ trades: [...get().trades, trade] })
      },

      updateTrade: (id, updates) => {
        const trades = get().trades.map(trade =>
          trade.id === id ? { ...trade, ...updates } : trade
        )
        set({ trades })
      },

      addStudyTime: (minutes) => {
        set({ studyTime: get().studyTime + minutes })
      },

      resetProgress: () => {
        set({
          topics: initialTopics,
          completedTopics: [],
          currentTopic: null,
          testResults: [],
          simulatorResults: [],
          trades: [],
          totalProgress: 0,
          studyTime: 0,
        })
      },
    }),
    {
      name: 'smc-academy-storage',
    }
  )
)
