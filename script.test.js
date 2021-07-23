const { getPeople, isCity } = require('./script')
const fetch = require('node-fetch')
test('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return getPeople(fetch)
        .then(data => {
            expect(data.count).toEqual(82)
            expect(data.count).not.toEqual(42)
        })
})
test('testing capture calls', () => {
    const mock = jest.fn()
    let result = mock('foo')
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledTimes(1)
    expect(mock).toHaveBeenCalledWith('foo')
})

test('mock return value', () => {
    const mock = jest.fn()
    mock.mockReturnValue("bar")

    expect(mock('foo')).toBe('bar')
    expect(mock).toHaveBeenCalledWith('foo')
})

test('test getPeople with dependency injection', () => {
    const URL = 'https://swapi.dev/api/people'
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: [1,2,3,4,5]
            })
        }))
        expect.assertions(5)
        return getPeople(mockFetch).then(data => {
            expect(mockFetch.mock.calls.length).toEqual(1)
            expect(mockFetch).toBeCalled()
            expect(mockFetch).toHaveBeenCalledTimes(1)
            expect(mockFetch).toHaveBeenCalledWith(URL)
            expect(data.count).toEqual(87)
        })
})

let db = []
const initDB = () => db = ['Jaipur', 'Bagalore', 'Kota', 'London']
const closeDB = () => db = []

beforeEach(() => initDB())
afterEach(() => closeDB())
beforeAll(() => initDB())
afterAll(() => closeDB())

test('city is Jaipur', () => {
    expect(isCity('Jaipur', db)).toBeTruthy()
})
it('name is dixant', () => {
    const name = "Dixant"
    expect(name).toBeDefined()
    expect(name).toBe("Dixant")
});
