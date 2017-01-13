let Router = require('express').Router()

Router.Route('/giph')
    .get(giphRouter.GET_GIPH)

module.exports = Router