'use client'

import React, { useState, useEffect } from 'react'

interface LoadingProps {
  type?: 'spinner' | 'dots' | 'pulse' | 'skeleton' | 'wave'
  size?: 'sm' | 'md' | 'lg'
  color?: string
  text?: string
  fullScreen?: boolean
  progress?: number
  className?: string
}

const Loading: React.FC<LoadingProps> = ({
  type = 'spinner',
  size = 'md',
  color = '#3b82f6',
  text,
  fullScreen = false,
  progress,
  className = ''
}) => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    if (type === 'dots' || text) {
      const interval = setInterval(() => {
        setDots(prev => prev.length >= 3 ? '' : prev + '.')
      }, 500)
      return () => clearInterval(interval)
    }
  }, [type, text])

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const containerClass = fullScreen 
    ? 'fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-4'

  const renderSpinner = () => (
    <div 
      className={`${sizeClasses[size]} border-4 border-gray-200 border-t-current rounded-full animate-spin`}
      style={{ borderTopColor: color }}
    />
  )

  const renderDots = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} rounded-full animate-bounce`}
          style={{ 
            backgroundColor: color,
            animationDelay: `${i * 0.15}s`
          }}
        />
      ))}
    </div>
  )

  const renderPulse = () => (
    <div 
      className={`${sizeClasses[size]} rounded-full animate-pulse`}
      style={{ backgroundColor: color }}
    />
  )

  const renderSkeleton = () => (
    <div className="space-y-3 w-full max-w-md">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse">
          <div 
            className={`h-4 rounded ${i === 2 ? 'w-3/4' : 'w-full'}`}
            style={{ backgroundColor: `${color}30` }}
          />
        </div>
      ))}
    </div>
  )

  const renderWave = () => (
    <div className="flex space-x-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`${size === 'sm' ? 'w-1' : size === 'md' ? 'w-2' : 'w-3'} ${size === 'sm' ? 'h-8' : size === 'md' ? 'h-12' : 'h-16'} rounded-full animate-pulse`}
          style={{
            backgroundColor: color,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  )

  const renderLoader = () => {
    switch (type) {
      case 'dots': return renderDots()
      case 'pulse': return renderPulse()
      case 'skeleton': return renderSkeleton()
      case 'wave': return renderWave()
      default: return renderSpinner()
    }
  }

  return (
    <div className={`${containerClass} ${className}`}>
      <div className="flex flex-col items-center space-y-4">
        {renderLoader()}
        
        {text && (
          <p className="text-gray-600 font-medium">
            {text}{type === 'dots' ? dots : ''}
          </p>
        )}
        
        {progress !== undefined && (
          <div className="w-64 bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${Math.min(Math.max(progress, 0), 100)}%`,
                backgroundColor: color 
              }}
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              {Math.round(progress)}%
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Loading

// Usage examples:

// Basic spinner
// <Loading />

// Full screen loading with text
// <Loading fullScreen text="Loading your content" />

// Dots animation with progress
// <Loading type="dots" text="Processing" progress={75} />

// Custom color and size
// <Loading type="wave" size="lg" color="#ef4444" />

// Skeleton loader for content
// <Loading type="skeleton" />

// In a Next.js page with loading state
export const ExampleUsage = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setLoading(false)
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <Loading 
        type="spinner"
        fullScreen
        text="Loading application"
        progress={progress}
        color="#10b981"
      />
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Content Loaded!</h1>
    </div>
  )
}