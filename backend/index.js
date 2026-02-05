const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const serviceRoutes = require('./routes/services')
const bookingRoutes = require('./routes/bookings')
const contactRoutes = require('./routes/ContactRouter')

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/salon_project'

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

// Services API
app.use('/api/services', serviceRoutes)
// Bookings API
app.use('/api/bookings', bookingRoutes)

// Contact API
app.use('/api/contacts', contactRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})