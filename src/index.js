const args = require('minimist')(process.argv.slice(2))
const axios = require('axios').default
const helper = require('./main.js')
const solutionsUri = process.env.SOLUTIONS_URL ||
  'https://gist.githubusercontent.com/paddyredbeard/95cec9ed4a7a15b4c7209ba8502438de/raw/e73c6698ada392ec955f8d3b985bb9de995fd6ad/wordle-solutions.txt'

if (typeof args.pattern === 'undefined') {
  console.error('No pattern requested')
  process.exit(1)
}

/**
 * Get matches
 */
axios.get(solutionsUri)
  .then(function (response) {
    // handle success
    const matches = helper.findMatches(args.pattern, response.data)
    console.log(matches)
    return matches
  })
  .catch(function (error) {
    // handle error
    console.error(error)
    return false
  })
