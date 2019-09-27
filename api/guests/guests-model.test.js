// Testing for guests model
const request = require('supertest');
const db = require('../../data/dbConfig.js');
const FoodRouter = require('./guests-model.js');

// Mostly setting up to look for glitches. Or see if something needs touching up to prevent errors.

describe('Guests Model', () => {

  beforeEach(async () => {
    // wipe the database
    await db('guests').truncate()
  })
  
//#region - CREATE

describe('function addGuest(input)', () => {
  it('shouldDoThis', async () => {

    // Expected Input

    // call function -> 

    // expected results -> 
    
  })
})

//#endregion

//#region - READ 

describe('function getGuests()', () => {
  it('return a list of all guests', async () => {

    // Expected Input

    // call function -> 

    // expected results -> 
    
  })
})

describe('function getGuest(id)', () => {
  it('return a guest by id', async () => {

    // Expected Input

    // call function -> 

    // expected results -> 
    
  })
})

//#endregion - Get

//#region - Update

describe('function updateGuest(changes, id)', () => {
  it('shouldDoThis', async () => {

    // Expected Input

    // call function -> 

    // expected results -> 
    
  })
})

//#endregion

//#region - Delete

describe('function deleteGuest(id)', () => {
  it('shouldDoThis', async () => {

    // Expected Input

    // call function -> 

    // expected results -> 
    
  })
})

//#endregion
  
})
