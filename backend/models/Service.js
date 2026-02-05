const { Schema, model } = require('mongoose')

const serviceSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    image: { type: String, trim: true },
    details: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
)

module.exports = model('Service', serviceSchema)
