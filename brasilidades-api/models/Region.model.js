const { Schema, model } = require('mongoose')

const regionSchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = model('Region', regionSchema)
