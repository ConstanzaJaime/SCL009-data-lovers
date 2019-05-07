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

describe('filterPoke', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof filterPoke, 'function');
  });

  it('debería retornar Array Bulbasaur para "Poison" ', () => {
    assert.deepEqual(window.filterPoke(POKEMON,"Poison","type"), [{
      "num": "001", 
      "name": "Bulbasaur", 
      "type": "Poison", 
    "weaknesses": "Ice"}])
  });
  it('debería retornar Array Geodude para "Water" ', () => {
    assert.deepEqual(window.filterPoke(POKEMON,"Water","weaknesses"), [{
      "num": "074",
      "name": "Geodude",
      "type": "Rock",
      "weaknesses": "Water"}]);
  });
});

describe('counter', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof counter, 'function');
  });

  it('debería retornar 1 para "Grass" ', () => {
    assert.deepEqual(window.counter(POKEMON,"Grass","type"),1)
  });
  it('debería retornar 1 para "Ice" ', () => {
    assert.deepEqual(window.counter(POKEMON,"Ice","weaknesses"),1)
  });
});

describe('orderData', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof orderData, 'function');
  });

  it('debería retornar arrays ordenados por nombre de z-a', () => {
    assert.deepEqual(window.orderData(POKEMON,"name","des"),[{
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
    }, {
      "num": "001",
      "name": "Bulbasaur",
      "type": "Poison",
      "weaknesses": "Ice"
    
    }])
  });
});