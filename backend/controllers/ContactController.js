const ContactModel = require("../models/Contact");

const create = async (req, res) => {
    try {
        const contact = await ContactModel.create(req.body);
        res.status(201).json(contact);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create contact" });
    }
};

const getContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        res.json(contacts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch contacts" });
    }
};

const deleteContact = async (req, res) => {
    try {
        await ContactModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Contact deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to delete contact" });
    }
};

module.exports = { create, getContacts, deleteContact };

