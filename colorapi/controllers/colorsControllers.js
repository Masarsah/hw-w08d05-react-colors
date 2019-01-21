const express = require('express');
const router = express.Router();
const color = require('../models/color');

// add routes and functions here
const sendcolors = (req, res) => res.json(res.locals.colors);
const sendcolor = (req, res) => res.json(res.locals.color);
const sendSuccess = (req, res) => res.send('success');

router.get('/', color.getAll, sendcolors);
router.post('/', color.create, sendcolor);
router.put('/:id', color.update, sendcolor);
router.delete('/:id', color.delete, sendSuccess)


module.exports = router;