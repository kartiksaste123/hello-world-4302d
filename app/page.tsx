'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [currentYear, setCurrentYear] = useState<number>(2024)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 flex items-center justify-center p-8">
      <div className={`text-center space-y-8 transition-all duration-1000 transform ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Hello, World!
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light">
            Welcome to the future of web development
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Built with Next.js 14 & Tailwind CSS
          </p>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
          <p className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white">
            {currentYear}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Current Year
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
          <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-sm">Refreshed automatically</span>
        </div>
      </div>
    </main>
  )
}