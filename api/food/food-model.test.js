// Testing for foods model
const request = require('supertest');
const db = require('../../data/dbConfig.js');
const FoodRouter = require('./food-model.js');

// Mostly setting up to look for glitches. Or see if something needs touching up to prevent errors.

describe('Food Model', () => {

  beforeEach(async () => {
    // wipe the database
    await db('foods').truncate()
  })
  
  //#region - CREATE

  describe('function addFood(input)', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  describe('function addCategory(input)', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  
  //#endregion
  
  //#region READ - Get functions

  describe('function getFood()', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  describe('function getFoodbyID(id)', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  describe('function getCategories()', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  describe('function getCategory(id)', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  
  //#endregion - Get functions
  
  //#region - Update

  describe('function updateFood(changes, id)', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  describe('function updateCategory(changes, id)', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  
  //#endregion
  
  //#region - Delete 

  describe('function deleteFood(id)', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })

  describe('function deleteCategory(id)', () => {
    it('shouldDoThis', async () => {
  
      // Expected Input
  
      // call function -> 
  
      // expected results -> 
      
    })
  })
  
  //#endregion
  
})