const db = require('./actions/db')

// Route Controller methods for /exchange

exports.useExchangeToken = async (req, res) => {
    const address = await db.getAddress(req.params)    
    if (address) {
        res.render('index', { 
            token: address.token, 
            exchange: address.exchange,
            address: address.public
        })
    }
    else res.json({ status: "not found" })
}
exports.setExchangeTokenAddress = async (req, res) => {
    // const { secret } = req.params // if exists -> save
    const data = await db.saveNewAddress(req.params)
    if (data) res.json(data)
    else res.json({ status: 403, detail: 'wallet already exists' })
}