const { Schema, model } = require('mongoose')

const commentSchema = new Schema(
  {
    comment: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    regionId: { type: Schema.Types.ObjectId, ref: 'Region', required: true },
  },
  { timestamps: true }
)

module.exports = model('Comment', commentSchema)
