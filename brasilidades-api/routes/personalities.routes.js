const { Router } = require('express')
const uploadCloud = require('../config/cloudinary.config')
const Personality = require('../models/Personality.model')
const Region = require('../models/Region.model')

const router = Router()

router.post('/personalities/:regionName', async (req, res, next) => {
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
    next(error)
  }
})

router.get('/personalities/:regionName', async (req, res, next) => {
  const { regionName } = req.params
  try {
    const region = await Region.findOne({ title: regionName })
    if (!region) {
      return res.status(404).json({ msg: 'Region not found' })
    }

    const personalities = await Personality.find({
      regionId: region._id,
    }).populate('regionId')
    res.status(200).json(personalities)
  } catch (error) {
    next(error)
  }
})

router.put(
  '/personalities/:id/image-upload',
  uploadCloud.single('image'),
  async (req, res, next) => {
    const { id } = req.params
    try {
      const personality = await Personality.findByIdAndUpdate(
        id,
        { imageUrl: req.file.path },
        { new: true }
      )
      res.status(200).json(personality)
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
