import React from 'react'

export default function Title({ title = "Nature's Beauty" }: { title?: string }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="relative">
        
        
        <h1 className="text-4xl md:text-5xl font-bold text-center my-6 text-gray-800">
          {title}
        </h1>
        

      </div>
    </div>
  )
}