const { Schema, model } = require('mongoose')

const personalitySchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, maxLength: 500 },
    area: [String],
    birthDay: { type: Date, required: true },
    deceased: Date,
    wikipediaUrl: {
      type: String,
      validate: {
        validator: (url) => url.indexOf('https://pt.wikipedia.org/') === 0,
        message: 'Wikipedia url must start with https://pt.wikipedia.org/wiki/',
      },
    },
    imageUrl: String,
    regionId: { type: Schema.Types.ObjectId, ref: 'Region', required: true },
  },
  { timestamps: true }
)

module.exports = model('Personality', personalitySchema)
