import { sayHello } from '../src/say-hello'

describe('Hello', () => {
    it('should say hello', () => {
        const name = 'Halo Alam';
        expect(name).toBe("Halo Alam")
    })
})


describe('Say Hello', () => {
    it('should say hello', () => {
        expect(sayHello('Alam')).toBe('Hello Alam')
    })
})