const passwordRange = { min: 273025, max: 767253 };  // input


// Password Criteria

const containsDouble = digits => digits.some((digit, i) => digit === digits[i + 1]);

const neverDecrease = digits => !digits.some((digit, i) => digit > digits[i + 1]);

const containsIsolatedDouble = digits => digits.some((digit, i) => (
  digit === digits[i + 1] && digit !== digits[i - 1] && digit !== digits[i + 2]
));


function getNumOfValidPasswords(passwordRange, criteria) {
  // passwordRange = { min: 134792, max: 675810 }
  // criteria = [function1, function2, ...]
  let validPasswords = [];

  for (let i = passwordRange.min; i <= passwordRange.max; i++) {
    const password = i.toString(10);
    const digits = password.split('').map(char => parseInt(char, 10));
    let isValid = true;

    for (let n = 0; n < criteria.length && isValid === true; n++) {
      isValid = isValid && criteria[n](digits);
    }

    if (isValid) validPasswords.push(password);
  }

  return validPasswords.length;
}


console.log('Number of valid passwords (Part One):',
  getNumOfValidPasswords(passwordRange, [containsDouble, neverDecrease]));

console.log('Number of valid passwords (Part Two):',
  getNumOfValidPasswords(passwordRange, [containsIsolatedDouble, neverDecrease]));
