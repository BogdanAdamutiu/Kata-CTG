const cards = require('./Cards.js')();

test('Test get and set card type', () => {
    cards.Type('Damage');
    expect(cards.Type()).toBe('Damage');
});