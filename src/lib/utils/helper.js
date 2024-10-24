const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

const verifyParentheses = (str) => {
  const stack = [];
  const pairs = { '(': ')', '{': '}', '[': ']' };
  for (const char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      if (stack.length === 0 || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

function removeDuplicates(arr) {
  const array = isValidArrayString(arr);
  const uniqueArray = [];
  if (array) {
    for (let i = 0; i < array.length; i++) {
      if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
      }
    }
  }
  return uniqueArray;
}

const isValidArrayString = (str) => {
  try {
    const parsed = JSON.parse(str);
    return Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
};

export {
  reverseString,
  verifyParentheses,
  removeDuplicates
}