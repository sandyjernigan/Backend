// Testing for users model
const request = require('supertest');
const db = require('../../data/dbConfig.js');

// Server file
const Users = require('./users-model.js');

// test setup content
const insertData = { 
  username: 'user4', 
  password: 'testpass',
  email: 'email4@email.com'
};

describe('Users Model', () => {

  beforeEach(async () => {
    // wipe the database
    await db('users').truncate()

    // seed the database
    await db('users').insert({
      username: 'user', 
      password: 'testpass', 
      email: 'email@email.com',
      group_id: 1
    });
    await db('users').insert({
      username: 'user2', 
      password: 'testpass2', 
      email: 'email2@email.com',
      group_id: 1
    });
    await db('users').insert({
      username: 'user3', 
      password: 'testpass3', 
      email: 'email3@email.com'
    });
  })

  describe('Users.find()', () => {

    it('should resolve to an array', async () => {
      
      // find() -- all users
      const results = await Users.find()

      // users database should be an array
      expect(Array.isArray(results)).toBe(true);
    })
    
    it('should resolve to array of 3 users', async () => {
      
      // find() -- all users
      const results = await Users.find()

      // users database should be empty
      expect(results.length).toEqual(3)
    })

  })
  
  describe('Users.add(insertData)', () => {

    it('should resolve to length 4', async () => {
      
      // database with seed data should have 3 users, this should add a 4th user

      // add(user) - insert user into database
      await Users.add(insertData)

      // assertion
      const results = await db('users');
      expect(results.length).toBe(4);
      expect(results[3].username).toBe('user4');
    });

    it('should resolve to the newly created user', async () => {

      // add(user) - insert user into database
      const user = await Users.add(insertData);
      expect(user).toEqual({ id: 4, username: 'user4'});
    });

  });
  
  describe('Users.findById(id)', () => {

    it('findById(1) should resolve to the first user', async () => {

      await db('users').insert(insertData);

      // findById(id) -- search database where({ id })
      const user = await Users.findById(1)

      // assertion
      expect(user.id).toEqual(1);
      expect(user.username).toEqual('user');
    });

    it('findById(2) should resolve to user with id of 2', async () => {

      // findById(id) -- search database where({ id })
      const user = await Users.findById(2)

      // assertion
      expect(user.id).toEqual(2);
      expect(user.username).toEqual('user2');
    });

    it('findById(3) should resolve to user with id of 3', async () => {

      // findById(id) -- search database where({ id })
      const user = await Users.findById(3)

      // assertion
      expect(user.id).toEqual(3);
      expect(user.username).toEqual('user3');
    });

  });
  
  describe('Users.findBy(filter)', () => {

    it('findBy(username) should resolve to 1 user when searching username', async () => {

      username = { username: 'user' }

      // findBy(filter) -- search database where({ username })
      const results = await Users.findBy(username)

      // assertion
      expect(results.length).toBe(1);
      expect(results[0].username).toEqual('user');
    });

    it('findBy(group_id) should resolve to 2 users when searching group_id: 1', async () => {

      searchFor = { group_id: 1 }

      // findBy(filter) -- search database where({ group_id: 1 })
      const results = await Users.findBy(searchFor)

      // assertion
      expect(results.length).toBe(2);
      expect(results[0].username).toEqual('user');
      expect(results[0].group_id).toEqual(1);
      expect(results[1].group_id).toEqual(1);
    });

  });
  
  describe('Users.update(changes, id)', () => {
    it('update(changes, id) should resolve to 1 user with new changes', async () => {

      // expected input
      const changeData = { 
        username: 'updateduser', 
        email: 'updatdemail@email.com'
      };

      await Users.update(changeData, 1);

      const users = await db('users');
      
      expect(users.length).toBe(3);
      expect(users[0].username).toEqual('updateduser');
      expect(users[0].email).toEqual('updatdemail@email.com');
    });
  });
  
  describe('Users.remove(id)', () => {
    it('should remove the entry from the database', async () => {
      
      let users = await db('users');

      expect(users.length).toBe(3);
      expect(users[0].id).toBe(1);

      await Users.remove(1);

      users = await db('users');

      expect(users.length).toBe(2);
    });

    it('should return the user information removed', async () => {

      const user = await Users.remove(1);

      expect(user.id).toBe(1);
      expect(user.username).toEqual('user');
    });
  })

});