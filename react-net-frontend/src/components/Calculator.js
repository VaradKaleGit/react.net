import React, { useState } from 'react';
import { add, subtract, multiply, divide } from '../services/api';

const Calculator = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculation = async (operation) => {
    try {
      setError('');
      setResult(null);  // Clear the previous result
      let response;
      switch (operation) {
        case 'add':
          response = await add(a, b);
          break;
        case 'subtract':
          response = await subtract(a, b);
          break;
        case 'multiply':
          response = await multiply(a, b);
          break;
        case 'divide':
          response = await divide(a, b);
          break;
        default:
          return;
      }
      setResult(response.data);
    } catch (error) {
      console.error('Error performing calculation:', error);
      setError('An error occurred while performing the calculation. ' + error.message);
    }
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
        placeholder="Enter second number"
      />
      <div>
        <button onClick={() => handleCalculation('add')}>Add</button>
        <button onClick={() => handleCalculation('subtract')}>Subtract</button>
        <button onClick={() => handleCalculation('multiply')}>Multiply</button>
        <button onClick={() => handleCalculation('divide')}>Divide</button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Calculator;
