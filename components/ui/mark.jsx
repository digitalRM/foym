'use client'
import React from 'react'

export default function Mark() {
  return (
    <span className="question-mark">
    ?
    <style jsx>{`
      .question-mark {
        position: relative;
        font-size: 24px; // Adjust the font size as needed
      }
      .question-mark::after {
        content: '.';
        position: absolute;
        bottom: 0;
        left: 0.1em; // Adjust for horizontal alignment
        color: blue; // Change the color as needed
      }
    `}</style>
  </span>
  )
}
