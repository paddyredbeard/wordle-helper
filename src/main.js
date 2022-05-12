/**
 * Ensure requested pattern is valid:
 * - pattern was requested
 * - pattern is exactly 5 characters
 * - pattern does not contain numbers
 */
const patternIsValid = function (pattern) {
  if (pattern.length !== 5) {
    console.log('Invalid pattern requested: pattern should be 5 characters')
    return 'Invalid pattern requested: pattern should be 5 characters'
  }

  if (pattern.search(/[^a-z*]/gi) !== -1) {
    console.log('Invalid pattern requested: pattern should not contain numbers or special characters other than *')
    return 'Invalid pattern requested: pattern should not contain numbers or special characters other than *'
  }

  return true
}

/**
 * Convert pattern to regex pattern
 */
const patternToRegex = function (pattern) {
  let expression = ''
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i].search(/[a-z]/gi) > -1) {
      expression += pattern[i]
    } else {
      expression += '[a-z]'
    }
  }

  return expression
}

/**
 * Find matching solutions
 */
const findMatches = function (pattern, solutions) {
  const isValid = patternIsValid(pattern)
  if (isValid === true) {
    const regexPattern = patternToRegex(pattern)
    const expression = new RegExp(regexPattern, 'igm')

    return solutions.match(expression)
  } else {
    return [isValid]
  }
}

module.exports = {
  findMatches,
  patternIsValid,
  patternToRegex
}
