const knex = require('knex')
const config = require('../knexfile').test

const db = require('./db')
const testDb = knex(config)

beforeAll(async () => await testDb.migrate.latest())
beforeEach(async () => await testDb.seed.run())
afterAll(async () => await testDb.destroy())

describe('Test getRecipes function', () => {
    test('Check function return correct number of recipes', () => {
        let promise = db.getRecipes(testDb)
           return promise.then((result) => {
                expect(result.length).toBe(2)
            })
    })
})