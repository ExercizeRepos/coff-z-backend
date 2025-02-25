const mongoose = require('mongoose');

const PageSectionSchema = new mongoose.Schema({
    pageName: { type: String, required: true, unique: true },
    sections: {
        aboutMe: { type: Boolean, default: false },
        address: { type: Boolean, default: false },
        birthdate: { type: Boolean, default: false }
    }
});

module.exports = mongoose.model('PageSection', PageSectionSchema);
