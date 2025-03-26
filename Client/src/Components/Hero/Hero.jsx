import React from 'react'
import "./Hero.css"
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const hero = () => {
  return (
    <div>
      <div className="container">
        <div className="nav">
            <div className="logo">
                <h1>Kronosys</h1>
            </div>
            <div className="navLinks">

            </div>
        </div>
      </div>
    </div>
  )
}

export default hero
