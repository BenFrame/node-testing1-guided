// Test away!
function foo () {
    return 'the foo'
}

describe('our first test', () => {
    test('sanity', () => {
        expect(5).toBe(5)
        expect(5).toBe(3 + 2)
        expect(5).toBeDefined()
        expect(5).toBeGreaterThan(4)
    })
    test('objects', () => {
        const o = { a: 1}
        const oo = { a: 1}
        const ooo = oo
        expect(o).toBe(o)
        expect(oo).toBe(ooo)
    })
    test('objects again', () => {
        expect({a:1}).toEqual({a:1})
    })
})
describe('foo function', () => {
    test('foo returns the foo', () => {
        expect(foo()).toBe('the foo')
        expect(foo()).toHaveLength(7)
    })
})