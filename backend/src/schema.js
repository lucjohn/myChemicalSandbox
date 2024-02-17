mongoose = require('mongoose');
const compound = new mongoose.Schema({

});
const saveData = new mongoose.Schema({
    UUID: String,
    name: String,
    compounds: [],
    achievements: Array,
    lastPlayed: Date,
    totalCompounds: Array
});