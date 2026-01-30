/**
 * TDD Exercises - Complete Test Suite
 * All tests for the five exercises
 */

const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
} = require('./functions');

// ============================================
// EXERCISE 1: capitalize() Tests
// ============================================
describe('capitalize', () => {
    test('capitalizes the first letter of a word', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('capitalizes single letter', () => {
        expect(capitalize('a')).toBe('A');
    });

    test('works with already capitalized word', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });

    test('only capitalizes first letter, leaves rest unchanged', () => {
        expect(capitalize('hello world')).toBe('Hello world');
    });

    test('handles empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('handles string with numbers', () => {
        expect(capitalize('123abc')).toBe('123abc');
    });

    test('handles uppercase string', () => {
        expect(capitalize('HELLO')).toBe('HELLO');
    });
});

// ============================================
// EXERCISE 2: reverseString() Tests
// ============================================
describe('reverseString', () => {
    test('reverses a simple word', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('reverses a single character', () => {
        expect(reverseString('a')).toBe('a');
    });

    test('reverses a sentence with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('handles empty string', () => {
        expect(reverseString('')).toBe('');
    });

    test('reverses string with numbers', () => {
        expect(reverseString('abc123')).toBe('321cba');
    });

    test('reverses string with special characters', () => {
        expect(reverseString('hello!')).toBe('!olleh');
    });

    test('reverses palindrome', () => {
        expect(reverseString('racecar')).toBe('racecar');
    });
});

// ============================================
// EXERCISE 3: calculator Tests
// ============================================
describe('calculator', () => {
    // ADD tests
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        test('adds negative numbers', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
        });

        test('adds positive and negative', () => {
            expect(calculator.add(5, -3)).toBe(2);
        });

        test('adds with zero', () => {
            expect(calculator.add(5, 0)).toBe(5);
        });

        test('adds decimals', () => {
            expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
        });

        test('adds large numbers', () => {
            expect(calculator.add(1000000, 2000000)).toBe(3000000);
        });
    });

    // SUBTRACT tests
    describe('subtract', () => {
        test('subtracts two positive numbers', () => {
            expect(calculator.subtract(5, 3)).toBe(2);
        });

        test('subtracts negative numbers', () => {
            expect(calculator.subtract(-5, -3)).toBe(-2);
        });

        test('subtracts with zero', () => {
            expect(calculator.subtract(5, 0)).toBe(5);
        });

        test('subtracts resulting in negative', () => {
            expect(calculator.subtract(3, 5)).toBe(-2);
        });

        test('subtracts decimals', () => {
            expect(calculator.subtract(5.5, 2.2)).toBeCloseTo(3.3);
        });
    });

    // MULTIPLY tests
    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(calculator.multiply(3, 4)).toBe(12);
        });

        test('multiplies by zero', () => {
            expect(calculator.multiply(5, 0)).toBe(0);
        });

        test('multiplies negative numbers', () => {
            expect(calculator.multiply(-3, -4)).toBe(12);
        });

        test('multiplies positive and negative', () => {
            expect(calculator.multiply(3, -4)).toBe(-12);
        });

        test('multiplies decimals', () => {
            expect(calculator.multiply(2.5, 4)).toBe(10);
        });

        test('multiplies by one', () => {
            expect(calculator.multiply(7, 1)).toBe(7);
        });
    });

    // DIVIDE tests
    describe('divide', () => {
        test('divides two positive numbers', () => {
            expect(calculator.divide(10, 2)).toBe(5);
        });

        test('divides with remainder', () => {
            expect(calculator.divide(10, 3)).toBeCloseTo(3.333, 2);
        });

        test('divides negative numbers', () => {
            expect(calculator.divide(-10, -2)).toBe(5);
        });

        test('divides positive by negative', () => {
            expect(calculator.divide(10, -2)).toBe(-5);
        });

        test('divides decimals', () => {
            expect(calculator.divide(5.5, 2)).toBeCloseTo(2.75);
        });

        test('throws error when dividing by zero', () => {
            expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
        });

        test('divides zero by number', () => {
            expect(calculator.divide(0, 5)).toBe(0);
        });
    });
});

// ============================================
// EXERCISE 4: caesarCipher() Tests
// ============================================
describe('caesarCipher', () => {
    // Basic shifting
    test('shifts letters by given factor', () => {
        expect(caesarCipher('abc', 3)).toBe('def');
    });

    test('shifts uppercase letters', () => {
        expect(caesarCipher('ABC', 3)).toBe('DEF');
    });

    // Wrapping from z to a
    test('wraps from z to a', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('wraps uppercase from Z to A', () => {
        expect(caesarCipher('XYZ', 3)).toBe('ABC');
    });

    // Case preservation
    test('preserves case in mixed case string', () => {
        expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });

    test('preserves case with wrapping', () => {
        expect(caesarCipher('XyZ', 3)).toBe('AbC');
    });

    // Punctuation and spaces
    test('keeps punctuation unchanged', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });

    test('handles spaces', () => {
        expect(caesarCipher('Hello World', 3)).toBe('Khoor Zruog');
    });

    test('handles numbers', () => {
        expect(caesarCipher('abc123', 3)).toBe('def123');
    });

    test('handles special characters', () => {
        expect(caesarCipher('a@b#c$', 3)).toBe('d@e#f$');
    });

    // Negative shift
    test('handles negative shift', () => {
        expect(caesarCipher('def', -3)).toBe('abc');
    });

    test('handles negative shift with wrapping', () => {
        expect(caesarCipher('abc', -3)).toBe('xyz');
    });

    // Large shift numbers
    test('handles shift larger than 26', () => {
        expect(caesarCipher('abc', 29)).toBe('def'); // 29 % 26 = 3
    });

    test('handles shift of exactly 26 (no change)', () => {
        expect(caesarCipher('abc', 26)).toBe('abc');
    });

    // Edge cases
    test('handles empty string', () => {
        expect(caesarCipher('', 3)).toBe('');
    });

    test('handles single character', () => {
        expect(caesarCipher('a', 1)).toBe('b');
    });

    test('handles string with only punctuation', () => {
        expect(caesarCipher('!!!', 3)).toBe('!!!');
    });

    // Real-world example
    test('encodes a complete sentence', () => {
        expect(caesarCipher('The quick brown fox jumps over the lazy dog.', 13))
            .toBe('Gur dhvpx oebja sbk whzcf bire gur ynml qbt.');
    });
});

// ============================================
// EXERCISE 5: analyzeArray() Tests
// ============================================
describe('analyzeArray', () => {
    // Basic functionality
    test('analyzes array of positive numbers', () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });

    test('analyzes array with negative numbers', () => {
        const result = analyzeArray([-5, -1, -3]);
        expect(result).toEqual({
            average: -3,
            min: -5,
            max: -1,
            length: 3
        });
    });

    test('analyzes mixed positive and negative numbers', () => {
        const result = analyzeArray([-10, 0, 10]);
        expect(result.average).toBeCloseTo(0);
        expect(result.min).toBe(-10);
        expect(result.max).toBe(10);
        expect(result.length).toBe(3);
    });

    // Single element
    test('handles array with one element', () => {
        const result = analyzeArray([5]);
        expect(result).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 1
        });
    });

    // Decimals
    test('handles decimals', () => {
        const result = analyzeArray([1.5, 2.5, 3.5]);
        expect(result.average).toBeCloseTo(2.5);
        expect(result.min).toBe(1.5);
        expect(result.max).toBe(3.5);
        expect(result.length).toBe(3);
    });

    // Array with same numbers
    test('handles array with all same numbers', () => {
        const result = analyzeArray([5, 5, 5, 5]);
        expect(result).toEqual({
            average: 5,
            min: 5,
            max: 5,
            length: 4
        });
    });

    // Array with zero
    test('handles array containing zero', () => {
        const result = analyzeArray([0, 5, -5]);
        expect(result.average).toBeCloseTo(0);
        expect(result.min).toBe(-5);
        expect(result.max).toBe(5);
    });

    // Large numbers
    test('handles large numbers', () => {
        const result = analyzeArray([1000, 2000, 3000]);
        expect(result.average).toBe(2000);
        expect(result.min).toBe(1000);
        expect(result.max).toBe(3000);
    });

    // Error cases
    test('throws error for empty array', () => {
        expect(() => analyzeArray([])).toThrow('Array cannot be empty');
    });

    test('throws error for array with non-numeric values', () => {
        expect(() => analyzeArray([1, 2, 'three'])).toThrow('Array must contain only numbers');
    });

    test('throws error for array with NaN', () => {
        expect(() => analyzeArray([1, 2, NaN])).toThrow('Array must contain only numbers');
    });

    test('throws error for array with undefined', () => {
        expect(() => analyzeArray([1, 2, undefined])).toThrow('Array must contain only numbers');
    });

    test('throws error for array with null', () => {
        expect(() => analyzeArray([1, 2, null])).toThrow('Array must contain only numbers');
    });
});
