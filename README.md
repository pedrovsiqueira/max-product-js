# Max-Product

## Overview
**Max-Product** is a JavaScript implementation of a dynamic programming algorithm to calculate the maximum product in a sequence of points with specific skip constraints. This project includes the implementation and Jest tests for validation.

---

## Features
- Efficient computation of the **maximum product** from a given 2D array of `[points, skip]`.
- Unit tests using **Jest** to ensure correctness and performance.

---

## Project Structure

- **maxProduct.js** - Core logic to compute the maximum product 
- **maxProduct.test.js** - Jest test suite for validation

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pedrovsiqueira/max-product-js
   cd max-product
   ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Testing
This project uses Jest for testing. To run the test suite:

```bash
npm test
```

Example output
```
    ✓ Test Case 1: Path: 5 → 4 (1 ms)
    ✓ Test Case 2: Path: 3 → 5
    ✓ Test Case 3: Path: 3 → 5 → 6
    ✓ Edge Case: Empty Array (1 ms)
    ✓ Edge Case: Single Element
    ✓ Edge Case: Single Element with Skip
    ✓ Case with Large Skip Value
    ✓ Case with Large Input Size (19 ms)
    ✓ Edge Case: Input is not an array (7 ms)
```