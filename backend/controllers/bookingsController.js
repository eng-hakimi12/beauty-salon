const Booking = require('../models/Booking')

// GET /api/bookings
async function getBookings(_req, res) {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 })
    res.json(bookings)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to fetch bookings' })
  }
}

// GET /api/bookings/:id
async function getBookingById(req, res) {
  try {
    const booking = await Booking.findById(req.params.id)
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' })
    }
    res.json(booking)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to fetch booking' })
  }
}

// POST /api/bookings
async function createBooking(req, res) {
  try {
    const { name, email, serviceTitle, serviceId, date, time } = req.body

    if (!name || !email || !serviceTitle || !date || !time) {
      return res
        .status(400)
        .json({ message: 'name, email, serviceTitle, date, and time are required' })
    }

    const booking = await Booking.create({
      name,
      email,
      serviceTitle,
      serviceId,
      date,
      time,
    })

    res.status(201).json(booking)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to create booking' })
  }
}

module.exports = {
  getBookings,
  getBookingById,
  createBooking,
}

