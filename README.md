# Test-Driven Development (TDD) - Beginner's Guide

**Welcome to your complete TDD learning package!** 

## 📦 What's Included

1. **tdd-tutorial.md** - Complete beginner's manual (100+ pages)
2. **functions.js** - All 5 exercises fully implemented
3. **functions.test.js** - Complete Jest test suite
4. **simple-test-runner.js** - Simple test runner (no Jest needed!)
5. **tdd-test.html** - Interactive web page to test functions
6. **package.json** - NPM configuration for Jest

## 🚀 Quick Start

### Option 1: Use the HTML Page (Easiest!)

1. Open `tdd-test.html` in any web browser
2. Enter values and click buttons to test each function
3. See results instantly!

### Option 2: Run Tests in Terminal

```bash
# Simple way (no installation needed)
node simple-test-runner.js

# With Jest (requires npm install)
npm install
npm test
```

## 📚 The 5 Exercises

### 1. capitalize()
Capitalizes the first character of a string.
```javascript
capitalize('hello') // 'Hello'
```

### 2. reverseString()
Reverses a string.
```javascript
reverseString('hello') // 'olleh'
```

### 3. calculator
Object with basic arithmetic operations.
```javascript
calculator.add(2, 3)      // 5
calculator.subtract(5, 2)  // 3
calculator.multiply(3, 4)  // 12
calculator.divide(10, 2)   // 5
```

### 4. caesarCipher()
Shifts letters by a number (encryption).
```javascript
caesarCipher('Hello, World!', 3) // 'Khoor, Zruog!'
```

### 5. analyzeArray()
Analyzes array statistics.
```javascript
analyzeArray([1,8,3,4,2,6])
// { average: 4, min: 1, max: 8, length: 6 }
```

## 📖 Learning Path

### For Absolute Beginners:
1. Read `tdd-tutorial.md` from start to finish
2. Open `tdd-test.html` and play with each function
3. Look at `functions.js` to see the solutions
4. Run `node simple-test-runner.js` to see all tests pass

### For Those Who Know Some JavaScript:
1. Read the tutorial's TDD Process section
2. Try to write your own tests in `functions.test.js`
3. Try to implement functions without looking at solutions
4. Run tests to check your work

### For Advanced Learners:
1. Install Jest: `npm install`
2. Practice the Red-Green-Refactor cycle
3. Add more edge case tests
4. Try the practice exercises at the end of the tutorial

## 🎯 Test Results

All 33 tests are passing! ✅

```
✅ capitalize() - 4 tests
✅ reverseString() - 4 tests  
✅ calculator.add() - 3 tests
✅ calculator.subtract() - 2 tests
✅ calculator.multiply() - 3 tests
✅ calculator.divide() - 3 tests
✅ caesarCipher() - 8 tests
✅ analyzeArray() - 6 tests
```

## 🔑 Key TDD Principles

1. **Write tests first** (before writing code)
2. **Watch it fail** (red phase)
3. **Make it pass** (green phase)
4. **Refactor** (blue phase)
5. **Repeat!**

## 💡 Tips for Success

- Start with the simplest test case
- Test edge cases (empty strings, zero, negatives)
- One test should test one thing
- Use descriptive test names
- Run tests frequently

## 🛠️ File Structure

```
├── tdd-tutorial.md          # Complete tutorial
├── functions.js             # All implementations
├── functions.test.js        # Jest test suite
├── simple-test-runner.js    # Simple test runner
├── tdd-test.html           # Interactive web page
├── package.json            # NPM configuration
└── README.md               # This file
```

## 🤝 Need Help?

If you're stuck on any exercise:
1. Check the tutorial for detailed explanations
2. Look at the solution in `functions.js`
3. Run `tdd-test.html` to see how it works
4. Try breaking down the problem into smaller steps

## 📝 Practice Exercises

After completing the 5 main exercises, try these:

1. **isPalindrome()** - Check if string reads same forwards/backwards
2. **fibonacci()** - Get the nth Fibonacci number
3. **findDuplicates()** - Find duplicate values in array
4. **isPrime()** - Check if number is prime
5. **sumArray()** - Sum all numbers in array

## 🌟 Next Steps

Once you've mastered these exercises:
- Learn about mocking and spying
- Explore integration testing
- Study continuous integration (CI)
- Practice TDD with real projects

## 📚 Resources

- [Jest Documentation](https://jestjs.io/)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

---


May Allah make the learning journey easy and beneficial!

Remember: **Good tests = Good code = Confident developer!** ✅
