
// ============================================
// EXERCISE 1: capitalize
// ============================================
function capitalize(str) {
    if (str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1);
}

// ============================================
// EXERCISE 2: reverseString
// ============================================
function reverseString(str) {
    return str.split('').reverse().join('');
}

// ============================================
// EXERCISE 3: calculator
// ============================================
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
};

// ============================================
// EXERCISE 4: caesarCipher
// ============================================
function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}
function shiftChar(char, shift) {
    // If not a letter, return unchanged
    if (!isLetter(char)) {
        return char;
    }
    
    // Check if uppercase
    const isUpperCase = char === char.toUpperCase();
    
    // Convert to lowercase for calculation
    const lowerChar = char.toLowerCase();
    const charCode = lowerChar.charCodeAt(0);
    const aCode = 'a'.charCodeAt(0);
    
    // Calculate position in alphabet (0-25)
    const position = charCode - aCode;
    
    // Shift and wrap around (handles both positive and negative shifts)
    const newPosition = ((position + shift) % 26 + 26) % 26;
    
    // Convert back to character
    const newChar = String.fromCharCode(newPosition + aCode);
    
    // Return with original case
    return isUpperCase ? newChar.toUpperCase() : newChar;
}

function caesarCipher(str, shift) {
    return str.split('').map(char => shiftChar(char, shift)).join('');
}

// ============================================
// EXERCISE 5: analyzeArray
// ============================================
function analyzeArray(arr) {
    // Validate: check if array is empty
    if (arr.length === 0) {
        throw new Error('Array cannot be empty');
    }
    
    // Validate: check if all elements are numbers
    if (!arr.every(item => typeof item === 'number' && !isNaN(item))) {
        throw new Error('Array must contain only numbers');
    }
    
    // Calculate average
    const sum = arr.reduce((total, num) => total + num, 0);
    const average = sum / arr.length;
    
    // Find min and max
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    // Return analysis object
    return {
        average: average,
        min: min,
        max: max,
        length: arr.length
    };
}

// ============================================
// EXPORTS
// ============================================
module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
};
