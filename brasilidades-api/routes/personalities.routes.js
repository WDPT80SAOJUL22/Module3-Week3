const { Router } = require('express')
const Personality = require('../models/Personality.model')
const Region = require('../models/Region.model')

const router = Router()

router.post('/personalities/:regionName', async (req, res) => {
  const { regionName } = req.params
  try {
    const region = await Region.findOne({ title: regionName })

    if (!region) {
      return res.status(404).json({ msg: 'Region not found' })
    }

    const newPersonality = await Personality.create({
      ...req.body,
      regionId: region._id,
    })

    res.status(200).json(newPersonality)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/personalities/:regionName', async (req, res) => {
  const { regionName } = req.params
  try {
    const region = await Region.findOne({ title: regionName })
    if (!region) {
      return res.status(404).json({ msg: 'Region not found' })
    }

    const personalities = await Personality.find({ regionId: region._id })
    res.status(200).json(personalities)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
