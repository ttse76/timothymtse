const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    numguests: Number
},{collection: 'Guests'});

module.exports = mongoose.model('Guest', GuestSchema);