const functions = require('./functions')

test('is defined', () => {
    expect(functions.getAge("Dixant", 26)).toBeDefined()
})
test('2 + 2 is equal 4', () => {
    expect(functions.add(2, 3)).toBe(5)
})
test('object assignment', () => {
    const data = {name: 'Dixant'}
    data['age'] = 26;
    expect(data).toEqual({name: 'Dixant', age: 26})
})
test('test is null', () => {
    expect(functions.isNull()).toBeFalsy()
})
test('test is undefined', () => {
    expect(functions.isUndefined()).toBeFalsy()
})
/*
toBeNull
toBeUndefined
toBeDefined
toBeTruthy
toBeFalsy
*/
test('zero', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})

test('two plus two', () => {
    const value = 2 + 2
    expect(value).toBe(4)
    expect(value).toEqual(4)
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)
})
test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    expect(value).toBeCloseTo(0.3)
})
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})
test('the shopping list has beer', () => {
    const shoppingList = ['banana', 'nappies', 'bin bags', 'beer']
    expect(shoppingList).toContain('beer')
    expect(new Set(shoppingList)).toContain('beer')
})

test('compiling android goes as expected', () => {
    expect(functions.compileAndroidCode).toThrow()
    expect(functions.compileAndroidCode).toThrow(/JDK/)
})