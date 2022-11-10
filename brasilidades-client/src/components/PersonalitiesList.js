import api from '../service/api.service'
import React, { useState, useEffect } from 'react'

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
        <h1 key={personality._id}>{personality.name}</h1>
      ))}
    </div>
  )
}
