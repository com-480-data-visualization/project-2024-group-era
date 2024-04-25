import React from 'react'
import { title } from '../constants/index'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {title} {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer