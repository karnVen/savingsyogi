import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AuthSection from './AuthSection'
import LeftSection from './LeftSection'

export default function AuthPage() {
  const [searchParams] = useSearchParams()
  const defaultMode = searchParams.get('mode') === 'signup' ? false : true

  const [isLogin, setIsLogin] = useState(defaultMode)

  useEffect(() => {
    const mode = searchParams.get('mode')
    setIsLogin(mode === 'signup' ? false : true)
  }, [searchParams])

  return (
    <div className="overflow-hidden h-screen">
      <div className="flex flex-col md:flex-row w-full h-full bg-gradient-to-br from-[#f4d5a6] via-[#e8c18c] to-[#dcb577]">
        <LeftSection />
        <AuthSection isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  )
}
