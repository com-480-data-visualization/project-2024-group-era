import React from 'react'
import { title } from '../constants/index'

const Footer = () => {
  return (
    <footer className="bg-[#1a1d1b] text-white p-4">
      <div className="flex justify-center">
        <p className="text-center">{title}</p>
      </div>
    </footer>
  )
}

export default Footer