import api from '../service/api.service'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const PersonalitiesList = () => {
  const [personalities, setPersonalities] = useState([])

  useEffect(() => {
    api.getPersonalities('Nordeste').then((result) => {
      setPersonalities(result)
    })
  }, [])
  return (
    <div>
      <h1>Personalities</h1>
      {personalities.map((personality) => (
        <Link
          to={`/personality/${personality._id}`}
          key={personality._id}
          style={{
            border: '1px solid black',
            width: '50vw',
            marginBottom: '5px',
          }}
        >
          <img src={personality.imageUrl} />
          <h1>{personality.name}</h1>
        </Link>
      ))}
    </div>
  )
}
