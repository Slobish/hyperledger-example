'use strict';

const { Contract } = require('fabric-contract-api');

class myContract extends Contract {

    async initLedger(ctx) {
			console.info('============= BEGINNING : Initialize Ledger ===========');
				const key = 'PERMANENT_KEY';
				await ctx.stub.putState(key, Buffer.from('myCustomValue'));
        console.info('============= END : Initialize Ledger ===========');
    }

    async query(ctx) {
        const value = await ctx.stub.getState('PERMANENT_KEY'); // get the car from chaincode state
        return value.toString();
    }

    async update(ctx, newValue) {
        await ctx.stub.putState('PERMANENT_KEY', Buffer.from(newValue));
    }
}

module.exports = myContract;
