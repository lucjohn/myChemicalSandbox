const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const schema = require('./schema');
dotenv.config();

const secret = process.env.SECRET;
const load = (req, res) => {
    authToken = req.body.authToken
    if (!authToken) {
        res.status(400).send('No authToken');
        return;
    }
    jwt.verify(authToken, secret,
        (err, decoded) => {
            if (err) {
                res.status(403).send('Invalid authToken');
                return;
            }
            if (!schema.SaveData.findOne({UUID: decoded.UUID})) {
                res.status(200).send(
                    schema.SaveData.create({UUID: decoded.UUID,
                        name: decoded.name,
                        compounds: [],
                        achievements: [],
                        lastPlayed: new Date(),
                        totalCompounds: []}));
                return;
            }
            res.send(schema.SaveData.findOne({UUID: decoded.UUID}));
            return;
        }
    );
};


module.exports = loadRouter;
