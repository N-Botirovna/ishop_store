import React from 'react'
import './leftComponent.css'

export default function PersonalInfo() {
  return (
    <div className="left-menu">
        <div className='per-info'>
        <h2>Shaxsiy ma'lumotlar:</h2>
        <p>Foydalanuvchi ID: ....................</p>
        <p>Ism: ...........................................</p>
        <p>Familya:.....................................</p>
        <p>Telefon raqami:...........................</p>
        <p>Parol: .........................................</p>
        <button className='edit'>Tahrirlash</button>
    </div>
    </div>
  )
}
