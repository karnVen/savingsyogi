import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index.jsx'
import AuthPage from './components/auth/AuthPage.jsx'
import NotFound from './pages/NotFound.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'

import Savings from './pages/Savings.jsx'
import Financial from './pages/in/Financial.jsx'
import Planning from './pages/in/Planning.jsx'
import StackedCards from './pages/in/StackedCards.jsx'


import BlogPost from "./pages/BlogPost"; // Import the new file



const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />

        <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Index />} />{' '}
            {/* Fix 404 #home issue */}
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/tum" element={<NotFound />} />
            <Route path="/asdf" element={<StackedCards />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/financial-education" element={<Financial />} />
            <Route path="/Planning" element={<Planning />} />
            <Route path="*" element={<NotFound />} />


          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  )
}



