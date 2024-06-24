import React from 'react'

const TailwindShowcase = () => {
  return (
    <div>
      {/* Flexbox example */}
      <div className="flex justify-between items-center mb-6">
        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
          Flex Item 1
        </div>
        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
          Flex Item 2
        </div>
        <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded">
          Flex Item 3
        </div>
      </div>

      {/* Grid example */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {Array(10)
          .fill(1)
          .map((_, i) => {
            return (
              <div key={i} className="bg-green-100 text-green-700 p-4 rounded">
                Grid Item {i}
              </div>
            )
          })}
      </div>

      {/* Typography example */}
      <div className="mb-6">
        <p className="text-lg text-gray-700 mb-2">
          This is a paragraph with{' '}
          <span className="font-semibold">semibold</span> text.
        </p>
        <p className="text-sm text-gray-500">
          This is a smaller paragraph with muted text.
        </p>
      </div>

      {/* Button example */}
      <div className="flex justify-center mb-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
      </div>

      {/* Form example */}
      <form className="space-y-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default TailwindShowcase
