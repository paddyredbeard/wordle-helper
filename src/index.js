const args = require('minimist')(process.argv.slice(2))
const axios = require('axios').default
const helper = require('./main.js')
const solutionsUri = process.env.SOLUTIONS_URL ||
  'https://gist.githubusercontent.com/paddyredbeard/95cec9ed4a7a15b4c7209ba8502438de/raw/e73c6698ada392ec955f8d3b985bb9de995fd6ad/wordle-solutions.txt'

/**
 * Get requested pattern
 */
let pattern
if (typeof args.pattern !== 'undefined') {
  pattern = args.pattern
}
if (typeof args._[0] !== 'undefined') {
  pattern = args._[0]
}
if (pattern.length === 0) {
  console.error('No pattern requested')
  process.exit(1)
}

/**
 * Get omissions, if requested
 */
let omissions
if (typeof args.omissions !== 'undefined') {
  omissions = args.omissions
}
if (typeof args._[1] !== 'undefined') {
  omissions = args._[1]
}

/**
 * Get matches
 */
axios.get(solutionsUri)
  .then(function (response) {
    // handle success
    const matches = helper.findMatches(pattern, response.data, omissions)
    matches.forEach((elem) => {
      console.log(elem)
    })
    return matches
  })
  .catch(function (error) {
    // handle error
    console.error(error)
    return false
  })
