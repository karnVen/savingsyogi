import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function AuthSection({ isLogin, setIsLogin }) {
  return (
    <div className=" h-[90%] flex flex-1 md:flex-[1.5] bg-[#003366]  rounded-bl-0 md:rounded-bl-[180px] items-center justify-center text-white overflow-hidden relative">
      <div className="w-[90%] sm:w-[85%] md:w-[70%] max-w-[420px] text-center relative h-full flex items-center py-8 sm:py-12 md:py-0">
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
