import React from 'react'

const StateDemo = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">State Classes Demonstration</h1>

      <div className="bg-gray-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Hover State</h2>
        <button className="bg-blue-500 text-black p-2 rounded hover:bg-blue-800">
          Hover me!
        </button>
      </div>

      <div className="bg-gray-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Focus State</h2>
        <input
          type="text"
          className="border-2 border-green-500 p-2 rounded focus:border-green-800 focus:outline-none"
          placeholder="Focus on me!"
        />
      </div>

      <div className="bg-gray-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Active State</h2>
        <button className="bg-red-500 text-black p-2 rounded active:bg-red-800">
          Active me!
        </button>
      </div>

      <div className="bg-gray-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Disabled State</h2>
        <button
          className="bg-yellow-500 text-black p-2 rounded disabled:bg-yellow-300"
          disabled
        >
          Disabled button
        </button>
      </div>

      <div className="bg-gray-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Focus Within State</h2>
        <div className="border-2 border-purple-500 p-4 focus-within:border-purple-800">
          <input
            type="text"
            className="border-2 border-purple-500 p-2 rounded mb-2 focus:border-purple-800"
            placeholder="Focus inside this box!"
          />
          <button className="bg-purple-500 text-black p-2 rounded focus:bg-purple-800">
            Focus within!
          </button>
        </div>
      </div>

      <div className="bg-gray-100 p-4 mb-4">
        <h2 className="text-2xl mb-2 text-black">Group Hover State</h2>
        <div className="group inline-block">
          <button className="bg-teal-500 text-black p-2 rounded">
            Group Hover me!
          </button>
          <div className="hidden group-hover:block bg-teal-800 text-black p-2 mt-2 rounded">
            Hello from group hover!
          </div>
        </div>
      </div>
    </div>
  )
}

export default StateDemo
