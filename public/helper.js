(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const helper = require('./main.js')

window.findMatches = helper.findMatches
window.helloWorld = helper.helloWorld
window.patternIsValid = helper.patternIsValid
window.patternToRegex = helper.patternToRegex

},{"./main.js":2}],2:[function(require,module,exports){
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
const findMatches = function (pattern, solutions, omissions) {
  const isValid = patternIsValid(pattern)
  if (isValid === true) {
    const regexPattern = patternToRegex(pattern)
    const expression = new RegExp(regexPattern, 'gim')
    const possibleSolutions = solutions.match(expression)

    // omissions are letters known not to match that
    // are used to filter out possible solutions
    if (typeof omissions !== 'undefined' && omissions.length > 0) {
      const negation = new RegExp(`[${omissions}]`, 'i')
      const matchedSolutions = possibleSolutions.filter(
        nextPossible => negation.test(nextPossible) === false
      )

      return matchedSolutions
    } else {
      return possibleSolutions
    }
  } else {
    return [isValid]
  }
}

module.exports = {
  findMatches,
  patternIsValid,
  patternToRegex
}

},{}]},{},[1]);
