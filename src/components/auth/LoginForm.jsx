import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export default function LoginForm({ setIsLogin }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="w-full ">
      <h2 className="  text-2xl md:text-3xl font-semibold mb-3 text-white">
        Welcome Back
      </h2>
      <p className="  opacity-80 text-sm mb-6">Manage your finance efficiently</p>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 bg-white/20 rounded text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all"
        />

        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full p-3 pr-10 bg-white/20 rounded text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
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
          className="p-3 bg-[#F4C752] text-[#041d75] font-bold rounded hover:bg-[#F4C752]/90 transition-colors"
        >
          Login
        </button>
      </form>

      <div className="text-xs mt-3 space-x-2">
        <span>Don't have an account?</span>
        <button
          type="button"
          onClick={() => setIsLogin(false)}
          className="text-yellow-300 underline cursor-pointer hover:text-yellow-200 transition-colors"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
