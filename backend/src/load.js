const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
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
            res.send('Connected');
        }
    );
};


module.exports = loadRouter;
