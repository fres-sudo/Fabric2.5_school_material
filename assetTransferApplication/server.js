const express = require('express')
const app = express()
const port = 3000
const FabNetwork = require('./index')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/submitTX', async (req, res) => {
    const data = req.body
    const organization = data.organization
    const channel = data.channel
    const chaincode = data.chaincode
    const txName = data.txName
    const txParams = data.txParams

    const resultTx = await FabNetwork.submitT(organization, channel, chaincode, txName, txParams)
    res.send(resultTx)
})


app.get('/getAllTrip', async (req, res) => {
    const organization = "agency.quotation.com"
    const channel = "q1channel"
    const chaincode = "shareService"
    const txName = "getAllTrip"

    const resultGetAll = await FabNetwork.getAllTrip(organization, channel, chaincode, txName)
    res.send(resultGetAll)
})


app.post('/book', async (req, res) => {
    const data = req.body
    const organization = data.organization
    const channel = data.channel
    const chaincode = data.chaincode
    const txName = data.txName
    const txParams = data.txParams

    const resultTxBook = await FabNetwork.bookTrip(organization, channel, chaincode, txName, txParams)
    res.send(resultTxBook)
})

app.delete('/deleteTrip', async (req, res) => {
    const data = req.body
    const organization = "agency.quotation.com"
    const channel = "q1channel"
    const chaincode = "shareService"
    const txName = "getAllTrip"

    const resultDel = await FabNetwork.deleteTrip(organization, channel, chaincode, txName)
    res.send(resultDel)
})

app.listen(port, () => {
    console.log(`Server listening at ${port}`)
})