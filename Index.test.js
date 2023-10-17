import { stringReverse } from "./Index.js"
import { getMonth } from "./Index.js"

describe('string reversing function', () => {
    it('correct reverse', () => {
        expect(stringReverse('Skill')).toBe('llikS')
    });
});

describe('month getting function', () => {
    it('march recieve', () => {
        expect(getMonth(3)).toBe('март')
    });
    it('april recieve', () => {
        expect(getMonth(4)).toBe('апрель')
    });
    it('unexpected input', () => {
        expect(getMonth('a')).toBe('неизвестно')
    });
});

