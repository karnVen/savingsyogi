import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import heroBg from '@/assets/45.jpg'

const Hero = () => {
  const headingRef = useRef(null)
  const subRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' },
      )

      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: 'power3.out' },
      )

      gsap.fromTo(
        subRef.current,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, delay: 0.7, ease: 'power3.out' },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[#002d62]/40"></div>


      {/* Content */}
      <div className="relative max-w-4xl text-center text-white space-y-6">
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          style={{
            backgroundImage: 'linear-gradient(90deg, #FFB300, #003366)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Savings Yogi
        </h1>

        <p
          ref={subRef}
          className="text-lg lg:text-xl xl:text-2xl font-medium text-white/90"
        >
          Trusted and unbiased source for savings info
          <br />
          and better money habits
        </p>
      </div>
    </section>
  )
}

export default Hero
