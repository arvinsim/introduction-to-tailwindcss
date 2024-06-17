// More information here
// https://tailwindcss.com/docs/responsive-design
import React from 'react'

const ResponsiveDemo = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">
        Responsive Classes Demonstration
      </h1>

      <div className="bg-blue-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Responsive Text</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black">
          This text size changes based on the screen size.
        </p>
      </div>

      <div className="bg-green-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Responsive Padding</h2>
        <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 bg-green-300 text-black">
          This box has responsive padding.
        </div>
      </div>

      <div className="bg-red-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Responsive Margin</h2>
        <div className="m-2 sm:m-4 md:m-6 lg:m-8 xl:m-10 bg-red-300 text-black">
          This box has responsive margin.
        </div>
      </div>

      <div className="bg-yellow-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Responsive Flexbox</h2>
        <div className="flex flex-col sm:flex-row md:flex-wrap lg:flex-nowrap xl:flex-col-reverse bg-yellow-300 p-4 text-black">
          <div className="p-2 bg-yellow-400 m-2">Box 1</div>
          <div className="p-2 bg-yellow-500 m-2">Box 2</div>
          <div className="p-2 bg-yellow-600 m-2">Box 3</div>
        </div>
      </div>

      <div className="bg-purple-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Responsive Grid</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-black">
          <div className="p-4 bg-purple-300">Grid Item 1</div>
          <div className="p-4 bg-purple-400">Grid Item 2</div>
          <div className="p-4 bg-purple-500">Grid Item 3</div>
          <div className="p-4 bg-purple-600">Grid Item 4</div>
          <div className="p-4 bg-purple-700">Grid Item 5</div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveDemo
