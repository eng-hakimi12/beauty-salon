const { Schema, model } = require('mongoose')

const bookingSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    serviceTitle: { type: String, required: true, trim: true },
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service' },
    date: { type: String, required: true, trim: true },
    time: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
)

module.exports = model('Booking', bookingSchema)

