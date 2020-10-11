import request from 'supertest'

import server from '../server'
import {getRecipes, getIngredients, getSteps} from '../db'



jest.mock('../db', () => ({
    getRecipes: jest.fn(),
    getIngredients: jest.fn(),
    getSteps: jest.fn()
}))

describe("GET /api/recipes", () => {
    test("returns recipes when successful", () => {
        getRecipes.mockImplementation(() => Promise.resolve([
            {id: 1, recipe_name: 'Beef Kebabs'}
        ]))
        return request(server)
            .get('/api/recipes')
            .then(res => {
                expect(res.status).toBe(200)
                expect(res.body.recipes.length).toBe(1)
            })
    })
    test("returns 500 if database function blows up", () => {
        getRecipes.mockImplementation(() => Promise.reject('error'))
        return request(server)
            .get('/api/recipes')
            .then(res => {
                expect(res.status).toBe(500)
                expect(res.text).toMatch(/something went wrong/)
            })
    })
})

describe("GET /api/ingredients", () => {
    test("returns ingredients", () => {
        getIngredients.mockImplementation(() => Promise.resolve([
            {ingredient_name: 'potatoes', ingredient_quantity: 2}
        ]))
        return request(server)
        .get('/api/ingredients/1')
        .then(res => {
            expect(res.status).toBe(200)
            expect(res.body.ingredients.length).toBe(1)
        })
    })
    test("returns 500 if database function blows up", () => {
        getIngredients.mockImplementation(() => Promise.reject('error'))
        return request(server)
            .get('/api/ingredients/1')
            .then(res => {
                expect(res.status).toBe(500)
                expect(res.text).toMatch(/something went wrong/)
            })
    })
})


describe("GET /api/steps", () => {
    test("returns steps", () => {
        getSteps.mockImplementation(() => Promise.resolve([
            {step_number: 1, step_desc: 'put in oven for 500 hours'}
        ]))
        return request(server)
        .get('/api/steps/1')
        .then(res => {
            expect(res.status).toBe(200)
            expect(res.body.steps.length).toBe(1)
        })
    })
    test("returns 500 if database function blows up", () => {
        getSteps.mockImplementation(() => Promise.reject('error'))
        return request(server)
            .get('/api/steps/1')
            .then(res => {
                expect(res.status).toBe(500)
                expect(res.text).toMatch(/something went wrong/)
            })
    })
})