# Wordle Helper

Wordle Helper compares a string of characters from the English language
alphabet, compares them to the NYT list of solutions, and returns any
words that might match the given pattern.

## Using Wordle Helper

### On the web

Visit https://wordle-helper.pddyrdbrd.net/

### On the command-line

If you have a working NodeJS environment:

1. Clone Wordle Helper: `$ git clone https://github.com/paddyredbeard/wordle-helper.git`
2. Install: `$ cd wordle-helper && npm install`
3. Get a hint (eg. for pattern `*onic`):
  - `$ npm run helper -- --pattern='*onic'` or
  - `$ node src/index '*onic'`

## About

Solutions were copied from the New York Times [list of 2,309 solutions](https://static.nytimes.com/newsgraphics/2022/01/25/wordle-solver/assets/solutions.txt).

This software uses an [archived version](https://gist.github.com/paddyredbeard/95cec9ed4a7a15b4c7209ba8502438de).

## License

MIT License

Wordle Helper © 2022 by Patrick J. Barabe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
