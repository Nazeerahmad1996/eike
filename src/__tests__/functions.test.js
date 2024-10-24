// functions.test.js

const { verifyParentheses, removeDuplicates, reverseString } = require('../lib/utils/helper'); // Adjust the path accordingly

describe('verifyParentheses', () => {
    test('should return true for valid parentheses', () => {
        expect(verifyParentheses('()')).toBe(true);
        expect(verifyParentheses('{[]}')).toBe(true);
        expect(verifyParentheses('((()))')).toBe(true);
    });

    test('should return false for invalid parentheses', () => {
        expect(verifyParentheses('(')).toBe(false);
        expect(verifyParentheses('([)]')).toBe(false);
        expect(verifyParentheses('{[}]')).toBe(false);
    });
});

describe('removeDuplicates', () => {
    test('should remove duplicates from an array', () => {
        expect(removeDuplicates('[1, 2, 2, 3]')).toEqual([1, 2, 3]);
    });
});

describe('reverseString', () => {
    test('should reverse a simple string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('should reverse a string with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('should handle an empty string', () => {
        expect(reverseString('')).toBe('');
    });

    test('should reverse a single character', () => {
        expect(reverseString('a')).toBe('a');
    });

    test('should reverse a string with special characters', () => {
        expect(reverseString('!@#$%^&*()')).toBe(')(*&^%$#@!');
    });

    test('should reverse a palindrome', () => {
        expect(reverseString('madam')).toBe('madam');
    });

    test('should reverse a string with numbers', () => {
        expect(reverseString('12345')).toBe('54321');
    });
});
