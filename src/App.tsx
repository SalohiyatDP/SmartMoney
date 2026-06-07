import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Library from './pages/Library'
import LessonViewer from './pages/LessonViewer'
import Simulator from './pages/Simulator'
import XAUUSDModule from './pages/XAUUSDModule'
import TestSystem from './pages/TestSystem'
import Playground from './pages/Playground'
import Search from './pages/Search'
import Certificate from './pages/Certificate'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/lesson/:topicId" element={<LessonViewer />} />
          <Route path="/simulator" element={<Simulator />} />
          <Route path="/xauusd" element={<XAUUSDModule />} />
          <Route path="/tests" element={<TestSystem />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/search" element={<Search />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
