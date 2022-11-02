const { Router } = require('express')
const Music = require('../models/Music.model')
const Region = require('../models/Region.model')

const router = Router()

router.post('/music/:regionName', async (req, res) => {
  const { regionName } = req.params
  try {
    const region = await Region.findOne({ title: regionName })
    if (!region) {
      return res.status(404).json({ msg: 'Region not found' })
    }
    const { body } = req

    body.regionId = region._id

    const newMusic = await Music.create(body)

    res.status(201).json(newMusic)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
