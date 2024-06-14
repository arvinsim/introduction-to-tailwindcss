'use client'
import React from 'react'
import Image from 'next/image'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-1/2 text-black">
        <h2 className="text-2xl mb-4">
          <Image
            src={'/chat.svg'}
            alt="Chat Icon"
            width={36}
            height={36}
            className={'inline-block'}
          />
          Hello World
        </h2>
        <p className="mb-4">This is a simple modal using TailwindCSS.</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
