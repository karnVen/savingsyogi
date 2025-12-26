import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index.jsx'
import AuthPage from './components/auth/AuthPage.jsx'
import NotFound from './pages/NotFound.jsx'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Index />} /> {/* Fix 404 #home issue */}
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/services" element={<h1>Services Coming Soon</h1>} />
            <Route path="/about" element={<h1>About Page Coming Soon</h1>} />
            <Route path="/contact" element={<h1>Contact Page Coming Soon</h1>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}
