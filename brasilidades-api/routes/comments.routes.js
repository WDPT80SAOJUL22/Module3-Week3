const { Router } = require('express')
const Comment = require('../models/Comment.model')
const Region = require('../models/Region.model')

const router = Router()

router.post('/comment/:regionName', async (req, res, next) => {
  const { regionName } = req.params
  try {
    const region = await Region.findOne({ title: regionName })
    if (!region) {
      return res.status(404).json({ msg: 'Region not found' })
    }
    const { comment } = req.body
    const { id } = req.user

    const newComment = await Comment.create({
      userId: id,
      comment,
      regionId: region.id,
    })
    res.status(201).json(newComment)
  } catch (error) {
    next(error)
  }
})

module.exports = router
