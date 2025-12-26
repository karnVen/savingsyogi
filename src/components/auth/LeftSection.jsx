import heroImg from '../../assets/Gemini_Generated_Image_6wjlix6wjlix6wjl.png'

export default function LeftSection() {
  return (
    <div className="hidden md:flex flex-col justify-between flex-[2.5]  p-6 md:p-10 relative">
      <h1 className="text-xl md:text-2xl font-bold underline text-[#0F2C59] font-[Pacifico]">
        Mineful Finance
      </h1>

      <div className="flex flex-col items-center justify-center relative z-10 flex-grow text-center">
        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] flex justify-center items-center mb-4">
          <img
            src={heroImg}
            alt="SavingsYogi hero"
            className="w-full rounded-full mix-blend-multiply animate-[float_3s_ease-in-out_infinite]"
          />
        </div>

        <p className="text-gray-700 text-xs md:text-sm max-w-[450px] font-serif px-4">
          Start your journey with Mineful Finance. Manage your assets, track
          expenses, and grow your wealth.
        </p>
      </div>
    </div>
  )
}
