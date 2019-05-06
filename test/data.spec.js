global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const POKEMON = [{
    "num": "001",
    "name": "Bulbasaur",
    "type": "Poison",
    "weaknesses": "Ice"
  }, {
    "num": "003",
    "name": "Venusaur",
    "type": "Grass",
    "weaknesses": 
      "Fire"
  }, {
    "num": "074",
    "name": "Geodude",
    "type": "Rock",
    "weaknesses": "Water"
  }
];

describe('filterType', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterType, 'function');
  });

  it('debería retornar Array Bulbasaur para "Poison" ', () => {
    assert.deepEqual(window.filterType(POKEMON,'Poison'), [{
      "num": "001", 
      "name": "Bulbasaur", 
      "type": "Poison", 
    "weaknesses": "Ice"}])
  });
});

describe('filterWeak', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterType, 'function');
  });

  it('debería retornar Array Geodude para "Water" ', () => {
    assert.deepEqual(window.filterWeak(POKEMON,'Water'), [{
      "num": "074",
      "name": "Geodude",
      "type": "Rock",
      "weaknesses": "Water"}]);
  });
});

describe('counterType', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof counterType, 'function');
  });

  it('debería retornar 1 para "Grass" ', () => {
    assert.deepEqual(window.counterType(POKEMON,'Grass'),1)
  });
});

describe('counterWeak', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof counterWeak, 'function');
  });

  it('debería retornar 1 para "Ice" ', () => {
    assert.deepEqual(window.counterWeak(POKEMON,'Ice'),1)
  });
});