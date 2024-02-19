const { Contract } = require('fabric-contract-api');
class AssetTransfer extends Contract{

    async initLedger(ctx) {
        const asset = {
            ID: 'Asset1',
            Color: '',
            Size: 0,
            Owner: '',
            AppraisedValue: ''
        }
        await ctx.stub.putState(asset.ID, Buffer.from(JSON.stringify(asset)));
    }


    async createAsset(ctx, id, color, owner, appraisedValue){
        const newAsset = {
            ID: id,
            Color: color,
            Size: 0,
            Owner: owner,
            AppraisedValue: appraisedValue
        }
        await ctx.stub.putState(id, Buffer.from(JSON.stringify(newAsset)));
    }


    async updateAsset(ctx, id, newSize) {
        const assetBuffer = await ctx.stub.getState(id)
        const assetString = assetBuffer.toString()
        const asset = JSON.parse(assetString)

        asset.Size = newSize

        const assetStr = JSON.stringify(asset)

        await ctx.stub.putState(id, Buffer.from(assetStr))
        return assetStr
    }


    async deleteAsset(ctx, id) {
        await ctx.stub.deleteState(id)
    }


    async transferAsset(ctx, id, owner) {
        const assetBuffer = await ctx.stub.getState(id)
        const assetString = assetBuffer.toString()
        const asset = JSON.parse(assetString)

        asset.Owner = owner

        const assetStr = JSON.stringify(asset)

        await ctx.stub.putState(id, Buffer.from(assetStr))
        return assetStr
    }


    async getAllAsset(ctx) {
        const iterator = await ctx.stub.getStateByRange('', '')
        let result = await iterator.next()
        let assets = []
        while (!result.done) {
            assets.push(result.toString())
            result = await iterator.next()
        }
        return JSON.stringify(assets)
    }
}

module.exports = AssetTransfer
