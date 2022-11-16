import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import apiService from '../service/api.service'

const UploadImageForm = () => {
  const [file, setFile] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  const handleChangeImg = (e) => {
    const file = e.target.files[0]
    setFile(file)
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImageUrl(imageUrl)
    } else {
      setImageUrl('')
    }
  }

  const handleUpdateImg = async () => {
    try {
      await apiService.uploadImage(id, file)
      navigate('/nordeste')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='change-img'>Change Image</label>
        <input id='change-img' type='file' onChange={handleChangeImg} />
        {imageUrl && (
          <>
            <img src={imageUrl} alt='new profile' width='200' height='200' />
            <button onClick={handleUpdateImg}>Update Image</button>
          </>
        )}
      </div>
    </>
  )
}

export default UploadImageForm
