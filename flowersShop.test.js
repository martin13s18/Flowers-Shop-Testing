const flowerShop = require('./flowerShop');
const { expect } = require('chai');

describe('Flowers shop functionality tests', () => {
    describe('Initiliazation', () => {
        it('Test with object', () => {
            expect(typeof flowerShop).to.equal('object');
        });

        it('Test all of object methods', () => {
            expect(typeof flowerShop['calcPriceOfFlowers']).to.equal('function');
            expect(typeof flowerShop['checkFlowersAvailable']).to.equal('function');
            expect(typeof flowerShop['sellFlowers']).to.equal('function');
        });
    });

    describe('calcPriceOfFlowers method', () => {
        it('Throws errors for invalid arguments', () => {
            expect(() => { flowerShop.calcPriceOfFlowers(0, 10, 12) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('flower', 10.5, 12) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('flower', 10, 12.5) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('flower', '10', 12.5); }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('flower', 10, '12.5') }).to.throw('Invalid input!');
        });

        it('Returns correct result in normal cases', () => {
            expect(flowerShop.calcPriceOfFlowers('flower', 10, 12)).to.equal('You need $120.00 to buy flower!');
        });

        it('Returns correct results for 0', () => {
            expect(flowerShop.calcPriceOfFlowers('flower', 0, 12)).to.equal('You need $0.00 to buy flower!');
            expect(flowerShop.calcPriceOfFlowers('flower', 10, 0)).to.equal('You need $0.00 to buy flower!');
            expect(flowerShop.calcPriceOfFlowers('flower', 0, 0)).to.equal('You need $0.00 to buy flower!');
        });

        it('Works with empty strings', () => {
            expect(flowerShop.calcPriceOfFlowers('', 10, 12)).to.equal('You need $120.00 to buy !');
        });

        it('Works with negative numbers', () => {
            expect(flowerShop.calcPriceOfFlowers('flower', -10, 12)).to.equal('You need $-120.00 to buy flower!');
            expect(flowerShop.calcPriceOfFlowers('flower', 10, -12)).to.equal('You need $-120.00 to buy flower!');
            expect(flowerShop.calcPriceOfFlowers('flower', -10, -12)).to.equal('You need $120.00 to buy flower!');
        });

        it('Can be called multiple times', () => {
            expect(flowerShop.calcPriceOfFlowers('flower', 10, 12)).to.equal('You need $120.00 to buy flower!');
            expect(flowerShop.calcPriceOfFlowers('flower', 5, 6)).to.equal('You need $30.00 to buy flower!');
        });
    });

    describe('sellFlowers method', () => {
        it('Returns correct result with an array with 3+ elements', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
        });

        it('Returns correct result with an array with 2 elements', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily"], 1)).to.equal('Rose');
            expect(flowerShop.sellFlowers(["Rose", "Lily"], 0)).to.equal('Lily');
        });

        it('Returns correct result with an array of a single element', () => {
            expect(flowerShop.sellFlowers(["Rose"], 0)).to.equal('');
        });

        it('Throws errors with invalid arguments', () => {
            expect(() => { flowerShop.sellFlowers('Rose', 0) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(['Rose', 'Lily'], 0.5) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(['Rose', 'Lily'], '0') }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(['Rose', 'Lily'], -1) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers(['Rose', 'Lily'], 3) }).to.throw('Invalid input!');
        });
    });

    describe('checkFlowersAvailable method', () => {
        it('Returns correct results', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
        });

        it('Returns correct results, if not available', () => {
            expect(flowerShop.checkFlowersAvailable('Sunflower', ["Rose", "Lily", "Orchid"])).to.equal(`The Sunflower are sold! You need to purchase more!`);
        });
    });
});