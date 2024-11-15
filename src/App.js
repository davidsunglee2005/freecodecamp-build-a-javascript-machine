import React, { useState } from 'react';
import './App.css';

function App() {

  const [display, setDisplay] = useState('0');
  const [formula, setFormula] = useState('');
  const [evaluated, setEvaluated] = useState(false);

  const handleClear = () => {
    setDisplay('0');
    setFormula('');
    setEvaluated(false);
  }

  const handleNumber = (num) => {
    if (evaluated) {
      setDisplay(num);
      setFormula(num);
      setEvaluated(false);
    } else {
      setDisplay((d) => (d === '0' ? num : d + num));
      setFormula((f) => f + num);
    }
  }

  const handleOperator = (operator) => {
    if (evaluated) {
      setFormula(display + operator)
      setEvaluated(false);
    } else {
      setFormula((f) => {
        const sanitized = f.replace(/[*+-/]$/, '');
        return sanitized + operator;
      });
    }
    setDisplay('0');
  }

  const handleDecimal = () => {
    if(!display.includes('.')) {
      setDisplay((d) => d + '.');
      setFormula((f) => f + '.');
    }
  }

  const handleEvaluate = () => {
    try {
      const result = eval(formula.replace(/--/g, '+'));
      setDisplay(result.toString());
      setFormula(result.toString());
      setEvaluated(true);
    } catch {
      setDisplay('Error');
    }
  }

  return (<div id="calculator">
    <div id="display">{display}</div>
    <button id="clear" onClick={handleClear}>AC</button>
    <button id="divide" onClick={() => handleOperator('/')}>/</button>
    <button id="multiply" onClick={() => handleOperator('*')}>*</button>
    <button id="seven" onClick={() => handleNumber('7')}>7</button>
    <button id="eight" onClick={() => handleNumber('8')}>8</button>
    <button id="nine" onClick={() => handleNumber('9')}>9</button>
    <button id="subtract" onClick={() => handleOperator('-')}>-</button>
    <button id="four" onClick={() => handleNumber('4')}>4</button>
    <button id="five" onClick={() => handleNumber('5')}>5</button>
    <button id="six" onClick={() => handleNumber('6')}>6</button>
    <button id="add" onClick={() => handleOperator('+')}>+</button>
    <button id="one" onClick={() => handleNumber('1')}>1</button>
    <button id="two" onClick={() => handleNumber('2')}>2</button>
    <button id="three" onClick={() => handleNumber('3')}>3</button>
    <button id="equals" onClick={handleEvaluate}>=</button>
    <button id="zero" onClick={() => handleNumber('0')}>0</button>
    <button id="decimal" onClick={handleDecimal}>.</button>
  </div>);

};

export default App;