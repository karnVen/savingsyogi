import Navbar from '@/components/home/Navigation'
import Hero from '../components/home/Hero'
import { StatsBar } from '@/components/StatsBar'
import { FeaturesSection } from '@/components/FeaturesSection'
import { InsightsSection } from '@/components/InsightsSection'
import { Footer } from '@/components/Footer'
import Preloader from '@/components/home/Preloder'
import MarketTicker from '@/components/MarketTicker'
// 1. IMPORT useNavigate
import { useState, useCallback, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate() // 2. Initialize Navigation

  const handlePreloadComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  // 3. SCROLL & CLEAN LOGIC
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const targetSection = searchParams.get('scrollTo')

    if (!isLoading && targetSection === 'contact') {
      const element = document.getElementById('contact')
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
          
          // 4. THE FIX: Remove the "?scrollTo=contact" from the URL instantly.
          // This ensures if you refresh the page, it won't scroll down again.
          navigate('/home', { replace: true }) 
        }, 100)
      }
    }
  }, [isLoading, location.search, navigate])

  return (
    <main className="min-h-screen">
      {isLoading && <Preloader onComplete={handlePreloadComplete} />}
      {!isLoading && (
        <>
          <Navbar />
          
          <div >
            <MarketTicker />
          </div>

          <Hero />
          <StatsBar />
          <FeaturesSection />
          <InsightsSection />
          
          <div id="contact">
            <Footer />
          </div>
        </>
      )}
    </main>
  )
}

export default Index