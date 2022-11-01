const { Schema, model } = require('mongoose')

const musicSchema = new Schema(
  {
    title: String,
    author: String,
    genre: [
      {
        type: String,
        enum: [
          'rock',
          'classic',
          'samba',
          'mpb',
          'funk',
          'forro',
          'sertanejo',
          'pagode',
          'pagotrap',
          'pop',
          'indiefunk',
        ],
      },
    ],
    youtubeUrl: {
      type: String,
      validate: {
        validator: (text) => text.indexOf('https://www.youtube.com/') === 0,
        message: 'Youtube url must start with https://www.youtube.com/',
      },
    },
    regionId: { type: Schema.Types.ObjectId, ref: 'Region', required: true },
  },
  { timestamps: true }
)

module.exports = model('Music', musicSchema)
