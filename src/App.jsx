import { useEffect, useState } from 'react'
import { Zap, Calendar, Sparkles } from 'lucide-react'
import './index.css'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="app">
      <main className="container">
        {/* Brand */}
        <div className={`brand ${isLoaded ? 'loaded' : ''}`}>
          <div className="brand-wrapper">
            <Zap className="brand-icon" size={20} strokeWidth={2.5} />
            <h1>StudyOne</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className={`content ${isLoaded ? 'loaded' : ''}`}>
          <h2 className="heading">Coming Soon</h2>
          
          <p className="tagline">Everything a student needs, in one place.</p>

          <div className="launch-date-container">
            <div className="launch-date-wrapper">
              <Calendar className="date-icon" size={24} strokeWidth={2} />
              <p className="launch-date">1 September 2026</p>
            </div>
          </div>

          <p className="message">
            Come back on 1 September 2026 to access the new StudyOne website.
          </p>

          <div className="divider"></div>

          <footer className="footer">
            <div className="footer-wrapper">
              <Sparkles className="footer-icon" size={16} strokeWidth={2} />
              <p>A new student experience is on the way.</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
