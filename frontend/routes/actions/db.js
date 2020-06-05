const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('/app/share/db.json')
const db = low(adapter)

exports.getAddress = ({ exchange, token }) => {
    const wallet = db.get('wallet').find({ exchange, token }).value()
    if (!!wallet) return Promise.resolve(wallet)
    return Promise.resolve(false)
}

exports.saveNewAddress = (params) => {
    const { exchange, token, address } = params
    const wallet = db.get('wallet')
    const hasExisting = !!wallet.find({ exchange, token }).size().value()
    
    if (hasExisting) return Promise.resolve(false)

    wallet.push({ exchange, token, public: address }).write()
    return Promise.resolve(`Thanks, ${address} has been added`)
}