import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import logoSrc from '../../assets/savings 1 (1).png'

// Place your logo image into the Vite public/ folder (e.g. public/savings-yogi-logo.png)
// and update this path if the file name is different.


const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null)
  const logoRef = useRef(null)
  const ringRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const percentageRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          // Fade out preloader and then notify parent
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
            onComplete: onComplete,
          })
        },
      })

      // Fake loading progress
      gsap.to(
        {},
        {
          duration: 0, // this are change timeing
          onUpdate: function () {
            // this.progress() goes 0 → 1
            const value = Math.round(this.progress() * 100)
            setProgress(value)
          },
        },
      )

      // Background subtle zoom
      tl.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
      )

      // Ring draw / scale
      tl.fromTo(
        ringRef.current,
        { scale: 0, rotate: -45, opacity: 0 },
        { scale: 1, rotate: 0, opacity: 1, duration: 1.1 },
        '-=0.2',
      )

      // Logo pop-in
      tl.fromTo(
        logoRef.current,
        { scale: 0.3, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.9, ease: 'back.out(1.7)' },
        '-=0.6',
      )

      // Title & subtitle
      tl.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4',
      ).fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3',
      )

      // Percentage counter
      tl.fromTo(
        percentageRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        '-=0.4',
      )
    }, containerRef)

    return () => ctx.revert()
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-[#001733] text-white"
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated circular frame around logo */}
        <div
          ref={ringRef}
          className="relative flex items-center justify-center w-52 h-52 rounded-full border-6 border-[#FFB300]/80 shadow-[0_0_40px_rgba(255,179,0,0.7)]"
        >
          <div className="absolute inset-3 rounded-full border-4 border-[#003366]" />
          {/* Extra circular mask so the logo looks perfectly round */}
          <div className="relative z-10 w-40 h-40 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              ref={logoRef}
              src={logoSrc}
              alt="Savings Yogi Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Spinning gradient halo – kept behind logo so colors stay original */}
          <div className="absolute -inset-3 z-0 rounded-full border-2 border-transparent bg-[conic-gradient(from_0deg,#FFB300,#FFEA70,#FFB300)] animate-spin-slow opacity-40" />
        </div>

        {/* Title + tagline */}
        <div className="text-center space-y-1">
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl font-extrabold tracking-[0.2em] uppercase"
            style={{
              backgroundImage: 'linear-gradient(90deg,#FFB300,#FFEA70,#FFB300)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Savings Yogi
          </h2>
          <p
            ref={subtitleRef}
            className="text-sm sm:text-base text-white/80 font-medium"
          >
            Mindful Finance · Smarter Savings
          </p>
        </div>

        {/* Progress + hint */}
        <div className="flex flex-col items-center gap-1">
          <span
            ref={percentageRef}
            className="text-lg font-semibold tracking-wide text-[#FFEA70]"
          >
            {progress}%
          </span>
          <span className="text-xs text-white/60">
            Aligning your savings energy...
          </span>
        </div>
      </div>
    </div>
  )
}

export default Preloader
