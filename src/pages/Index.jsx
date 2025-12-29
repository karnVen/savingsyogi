import Navbar from '@/components/home/Navigation'
import Hero from '../components/home/Hero'
import { StatsBar } from '@/components/StatsBar'
import { FeaturesSection } from '@/components/FeaturesSection'
import { InsightsSection } from '@/components/InsightsSection'
import { Footer } from '@/components/Footer'
import Preloader from '@/components/home/Preloder'
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
