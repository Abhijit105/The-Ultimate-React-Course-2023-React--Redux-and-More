import { useState } from 'react'

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.',
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.',
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!',
  },
]

export default function App() {
  const [curOpen, setCurOpen] = useState(null)

  return (
    <div className='accordion'>
      {faqs.map((faq, i) => (
        <Item
          title={faq.title}
          key={i + 1}
          itemNumber={i + 1}
          onCurOpen={setCurOpen}
          curOpen={curOpen}
        >
          {faq.text}
        </Item>
      ))}
    </div>
  )
}

function Item({ title, itemNumber, onCurOpen, curOpen, children }) {
  return (
    <div
      className={`item ${curOpen === itemNumber - 1 ? 'open' : ''}`}
      onClick={() => {
        curOpen === itemNumber - 1 ? onCurOpen(null) : onCurOpen(itemNumber - 1)
      }}
    >
      <div className='number'>{itemNumber}</div>
      <div className='title'>{title}</div>
      <div className='icon'>{`${curOpen === itemNumber - 1 ? '-' : '+'}`}</div>
      {curOpen === itemNumber - 1 && (
        <div className='content-box'>{children}</div>
      )}
    </div>
  )
}
