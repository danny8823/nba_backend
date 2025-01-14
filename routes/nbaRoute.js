const axios = require('axios');
const express = require('express');
const nbaAPI_Controller = require('../controller/nbaApiController');
const nbaRouter = express.Router()


nbaRouter.get('/api/nba/teams', nbaAPI_Controller.get_team)
nbaRouter.get('/api/nba/players', nbaAPI_Controller.get_players)

module.exports = nbaRouter