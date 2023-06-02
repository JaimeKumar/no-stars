import React from 'react'

export default function Guest({ guest, clickGuest }) {
  return (
    <div className="guestBlock" onClick={() => {clickGuest(guest.link)}}>
        <div className="guestImg">
        <img src={guest.img} alt={guest.text} />
        </div>
        <span>{guest.text}</span>
    </div>
  )
}
