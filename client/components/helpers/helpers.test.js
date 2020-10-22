
import { getRecipeIds, getRecipeIngredients, removeDuplicates } from './helpers'


const ingredients = [
        { recipe_id: 1, ingredient_name: 'Salt', ingredient_quantity: 30, measurement_name: 'tsp' },
        { recipe_id: 1, ingredient_name: 'Baby Spinach', ingredient_quantity: 30, measurement_name: 'g' },
        { recipe_id: 2, ingredient_name: 'Baby Spinach', ingredient_quantity: 30, measurement_name: 'g' },
        { recipe_id: 2, ingredient_name: 'Apple', ingredient_quantity: 1, measurement_name: '' },
        { recipe_id: 3, ingredient_name: 'Apple', ingredient_quantity: 1, measurement_name: '' }
    ]

const recipeIds = [1, 2]

test('returns recipe Ids', () => {
    const newArr = getRecipeIds(ingredients)
    expect(newArr.length).toBe(5)
    expect(newArr[2]).toBe(2)
})

test('gets ingredients based on recipe Ids', () => {
    const newArr = getRecipeIngredients(recipeIds, ingredients)
    expect(newArr.length).toBe(4)
    expect(newArr[3].ingredient_name).toMatch(/Apple/)
})

test('removes duplicates and adds quantities', () => {
    const newArr = removeDuplicates(ingredients)
    expect(newArr.length).toBe(3)
    expect(newArr[1].ingredient_quantity).toBe(60)
})