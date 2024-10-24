import './App.css';
import React, { useMemo, useState } from 'react';
import { verifyParentheses, removeDuplicates, reverseString } from './lib/utils/helper'; // Adjust the path accordingly

const App = () => {
  const [inputs, setInputs] = useState({
    reverseStr: '',
    parentheses: '',
    duplicateRemoveArr: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };


  const reversedString = useMemo(() => reverseString(inputs.reverseStr), [inputs.reverseStr]);
  const isParenthesesValid = useMemo(() => verifyParentheses(inputs.parentheses), [inputs.parentheses]);
  const uniqueArray = useMemo(() => removeDuplicates(inputs.duplicateRemoveArr), [inputs.duplicateRemoveArr]);

  return (
    <div className='App'>
      <div className="form">
        <span className='label'>Reverse String: </span>

        <input
          type='text'
          name="reverseStr"
          onChange={handleChange}
          placeholder="String"
        />
      </div>
      <div className="form">
        <span className='label'>Parentheses Verification: </span>
        <input
          type='text'
          name="parentheses"
          onChange={handleChange}
          placeholder="{[]}"
        />
      </div>
      <div className="form">
        <span className='label'>
          Remove Duplicates: 
        </span>

        <input
          type='text'
          name="duplicateRemoveArr"
          onChange={handleChange}
          placeholder="[1, 2, 3, 2, 4, 1, 5]"
        />
      </div>

      {inputs.reverseStr && <div>Reversed String: <strong>{reversedString}</strong></div>}
      {inputs.parentheses && <div>Parentheses Verification: <strong>{isParenthesesValid ? 'Valid' : 'Invalid'}</strong></div>}
      {inputs.duplicateRemoveArr && <div>Unique Array: <strong>{JSON.stringify(uniqueArray)}</strong></div>}
    </div>
  );
};

export default App;
