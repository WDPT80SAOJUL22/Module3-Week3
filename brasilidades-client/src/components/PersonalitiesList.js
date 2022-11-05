import axios from 'axios'
import React, { useState, useEffect } from 'react'

export const PersonalitiesList = () => {
  const [personalities, setPersonalities] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5005/personalities/Nordeste').then((result) => {
      setPersonalities(result.data)
    })
  }, [])
  return (
    <div>
      {personalities.map((personality) => (
        <h1 key={personality._id}>{personality.name}</h1>
      ))}
    </div>
  )
}
