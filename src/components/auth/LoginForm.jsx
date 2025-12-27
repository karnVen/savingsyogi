import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function LoginForm({ setIsLogin }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white drop-shadow-lg">
          Welcome Back
        </h2>
        <p className="text-white/80 text-sm md:text-base">
          Manage your finance efficiently
        </p>
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="relative">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#F4C752] focus:border-[#F4C752] transition-all shadow-lg hover:bg-white/15"
          />
        </div>

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full p-4 pr-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#F4C752] focus:border-[#F4C752] transition-all shadow-lg hover:bg-white/15"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-[#F4C752] transition-colors p-1"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="p-4 bg-gradient-to-r from-[#F4C752] to-[#F4C752] text-[#041d75] font-bold rounded-xl hover:from-[#F4C752] hover:to-[#F4C752] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transform duration-200"
        >
          Login
        </button>
      </form>

      <div className="text-sm mt-6 text-center">
        <span className="text-white/70">Don't have an account?</span>
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="ml-2 text-[#F4C752] font-semibold hover:text-[#FFD700] transition-colors "
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
