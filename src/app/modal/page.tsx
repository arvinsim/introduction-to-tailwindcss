'use client'
import React, { useState } from 'react'
import Modal from '../_components/Modal'

const ModalDemo: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Modal Demo</h1>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={openModal}
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default ModalDemo
