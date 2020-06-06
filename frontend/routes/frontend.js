const router = require('express').Router()
const errorHandler = require('utils/errors')
const { catchErrors } = require('utils/middleware')
const controller = require('./controller')

const { useExchangeToken, setExchangeTokenAddress } = controller

router
.get('/:token/:exchange', catchErrors(useExchangeToken))
.get('/:token/:exchange/:address/:secret', catchErrors(setExchangeTokenAddress))
.use(errorHandler)

module.exports = router