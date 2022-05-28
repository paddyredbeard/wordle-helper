'use strict'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

const elem = React.createElement

class HelperForm extends React.Component {
  constructor (props) {
    super(props)

    this.handleFind = this.handleFind.bind(this)
    this.handleUpdateSearchPattern = this.handleUpdateSearchPattern.bind(this)

    this.state = {
      searchPattern: '',
      matchedSolutions: []
    }
  }

  render () {
    return elem(
      'form',
      {
        autocomplete: 'off'
      },
      [
        elem(
          'label',
          {
            for: '#search-input'
          },
          'Search'
        ),
        elem(
          'input',
          {
            ariaLabel: 'Search',
            autoFocus: true,
            id: 'search-input',
            key: 'input0',
            label: 'Search for:',
            maxLength: 5,
            onChange: this.handleUpdateSearchPattern,
            placeholder: 'search',
            type: 'text'
          }
        ),
        elem(
          'button',
          {
            ariaLabel: 'Submit',
            key: 'button0',
            onClick: this.handleFind,
            title: 'Submit'
          },
          elem(
            'i',
            {
              className: 'gg-search'
            }
          )
        ),
        elem(
          HelperOutput,
          {
            key: 'output0',
            matchedSolutions: this.state.matchedSolutions
          }
        )
      ]
    )
  }

  handleFind (event) {
    const solutionsUri =
      'https://gist.githubusercontent.com/paddyredbeard/95cec9ed4a7a15b4c7209ba8502438de/raw/e73c6698ada392ec955f8d3b985bb9de995fd6ad/wordle-solutions.txt'
    fetch(solutionsUri, {})
      .then(response => response.text())
      .then(text => {
        const matches = findMatches(this.state.searchPattern, text)
        this.setState({ matchedSolutions: matches })
      })

    event.preventDefault()
  }

  handleUpdateSearchPattern (event) {
    this.setState({
      searchPattern: event.target.value
    })
  }
}

class HelperOutput extends React.Component {
  render () {
    let solutions
    if (!this.props.matchedSolutions || this.props.matchedSolutions.length === 0) {
      solutions = elem('code', { className: 'no-solution' }, 'No Matches')
    } else {
      solutions = this.props.matchedSolutions.map((next, i) => {
        return elem(
          'code',
          {
            className: 'helper-solution',
            key: `solution${i}`
          },
          next
        )
      })
    }

    return elem(
      'div',
      {
        className: 'helper-output'
      },
      solutions
    )
  }
}

const domContainer = document.querySelector('#helperContainer')
const root = ReactDOM.createRoot(domContainer)
root.render(elem(HelperForm))
