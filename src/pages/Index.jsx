import Navbar from '@/components/home/Navigation'
import Hero from '../components/home/Hero'
import { StatsBar } from '@/components/StatsBar'
import { FeaturesSection } from '@/components/FeaturesSection'
import { InsightsSection } from '@/components/InsightsSection'
import { Footer } from '@/components/Footer'
import Preloader from '@/components/home/Preloder'
import MarketTicker from '@/components/MarketTicker' // 1. Import Added Here
import { useState, useCallback } from 'react'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handlePreloadComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <main className="min-h-screen">
      {isLoading && <Preloader onComplete={handlePreloadComplete} />}
      {!isLoading && (
        <>
          <Navbar />
          
          {/* 2. Added Ticker with "Margin Top" to clear the Fixed Navbar */}
          {/* These margins (mt-14/16/20) match the exact height of your Navbar */}
          <div >
            <MarketTicker />
          </div>

          <Hero />
          <StatsBar />
          <FeaturesSection />
          <InsightsSection />
          <Footer />
        </>
      )}
    </main>
  )
}

export default Index