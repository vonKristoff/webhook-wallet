const db = require('./actions/db')
const ACCESS_KEY = require('/app/share/key')

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
    if (req.params.secret !== ACCESS_KEY) {
        return res.json({ staus: 401, detail: 'not tonight son'})
    }
    const data = await db.saveNewAddress(req.params)
    if (data) res.json(data)
    else res.json({ status: 403, detail: 'wallet already exists' })
}