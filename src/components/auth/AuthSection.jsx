import logoImg from '@/assets/logo.png'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function AuthSection({ isLogin, setIsLogin }) {
  return (
    <div className="h-full flex flex-1 md:flex-[1.5] bg-gradient-to-br from-[#0a2540] via-[#003366] to-[#001a33] rounded-bl-0 md:rounded-bl-[180px] items-center justify-center text-white overflow-hidden relative shadow-2xl">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4C752]/5 via-transparent to-[#F4C752]/5 pointer-events-none"></div>
      {/* Mobile Logo - Only visible on mobile */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 md:hidden z-20 flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#F4C752]/20 rounded-full blur-xl animate-pulse scale-125"></div>
          <img
            src={logoImg}
            alt="SavingsYogi Logo"
            className="relative w-24 h-24 rounded-full object-cover border-[3px] border-[#F4C752]/40 shadow-2xl"
          />
        </div>
      </div>

      <div className="w-[90%] sm:w-[85%] md:w-[70%] max-w-[420px] text-center relative h-full flex items-center pt-32 pb-8 sm:pt-36 sm:pb-12 md:pt-0 md:pb-0">
        {/* Login Form with slide animation */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
            isLogin
              ? 'translate-x-0 opacity-100 z-10'
              : '-translate-x-full opacity-0 z-0 pointer-events-none'
          }`}
        >
          <LoginForm setIsLogin={setIsLogin} />
        </div>

        {/* Register Form with slide animation */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out ${
            !isLogin
              ? 'translate-x-0 opacity-100 z-10'
              : 'translate-x-full opacity-0 z-0 pointer-events-none'
          }`}
        >
          <RegisterForm setIsLogin={setIsLogin} />
        </div>
      </div>
    </div>
  )
}
