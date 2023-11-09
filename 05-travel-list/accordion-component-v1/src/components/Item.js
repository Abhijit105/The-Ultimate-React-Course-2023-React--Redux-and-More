import { useState } from 'react'

export default function Item({ item, itemNumber }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`item ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(is => !is)}
    >
      <h2 className='number'>
        {itemNumber < 10 ? '0' + itemNumber : itemNumber}
      </h2>
      <h2 className='title'>{item.title}</h2>
      <h2 className='icon'>{!isOpen ? '+' : '-'}</h2>
      <p className='content-box'>{isOpen ? item.text : null}</p>
    </div>
  )
}
