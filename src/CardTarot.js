import React, { useEffect, useState } from 'react'

function CardTarot() {
  const [tarotData, setTarotData] = useState([])

  useEffect(() => {
    const getTarotData = async () => {
      await fetch('https://tarot.howlcode.com/api/v1/cards')
        .then((response) => response.json())
        .then((data) => {
          const tarotData = data.map((card) => {
            const cardName = card.name
              .split('-')
              .map((part) =>
                part !== 'of'
                  ? part[0].toUpperCase() + part.substring(1)
                  : part,
              )
              .join(' ')
            return { ...card, name: cardName }
          })
          setTarotData(tarotData)
        })
    }
    getTarotData()
  }, [])

  console.log(tarotData)

  return (
    <div>
      {tarotData.map((card, key) => (
        <div>
          {/* <img key={card.id} alt="card" src={card.image} /> */}
          <div key={card.id}>{card.name}</div>
          <div key={card.id}>Sumary: {card.summary}</div>
          <div key={card.id}>Meaning: {card.full_meaning}</div>
          <div key={card.id}>Reversed: {card.reversed}</div>
          <div key={card.id}>Upright: {card.upright}</div>
        </div>
      ))}
    </div>
  )
}

export default CardTarot
