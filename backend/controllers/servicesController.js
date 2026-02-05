const Service = require('../models/Service')

// GET /api/services
async function getServices(_req, res) {
  try {
    const services = await Service.find().sort({ createdAt: -1 })
    res.json(services)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to fetch services' })
  }
}

// POST /api/services
async function createService(req, res) {
  try {
    const { title, description, price, location, image, details } = req.body

    if (!title || !description || !price || !location) {
      return res
        .status(400)
        .json({ message: 'title, description, price, and location are required' })
    }

    const service = await Service.create({
      title,
      description,
      price,
      location,
      image,
      details,
    })

    res.status(201).json(service)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to create service' })
  }
}

// GET /api/services/:id
async function getServiceById(req, res) {
  try {
    const service = await Service.findById(req.params.id)

    if (!service) {
      return res.status(404).json({ message: 'Service not found' })
    }

    res.json(service)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Failed to fetch service' })
  }
}

module.exports = {
  getServices,
  createService,
  getServiceById,
}
