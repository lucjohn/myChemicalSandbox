mongoose = require('mongoose');
dotenv = require('dotenv');
dotenv.config();
const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const compound = new mongoose.Schema({
    name: String,
    formula: [{
        element: String,
        amount: Number
    }],
    type: String,
});
export const Compound = mongoose.model('Compound', compound);
const achievement = new mongoose.Schema({
    id: String,
    name: String,
    unlocks: String
});
export const Achievements = mongoose.model('Achievements', achievement);
export const saveData = new mongoose.Schema({
    UUID: {
        type : String,
        unique: true
    },
    name: String,
    compounds: [{
        compound: compound,
        location: {
            x: Number,
            y: Number
        }
    }],
    achievements: [achievement],
    lastPlayed: Date,
    totalCompounds: [compound]
});
export const SaveData = mongoose.model('SaveData', saveData);
