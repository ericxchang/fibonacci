import {checkFibonacciNumberSquare} from './fibonacci_square'

describe('Given checkFibonacciNumberSquare function', () => {
    it.each`
    input    | result
    ${'a'}   | ${'a: false'}
    ${3.5}   | ${'3.5: false'}
    ${-1}    | ${'-1: false'}
    ${0}     | ${'0: false'}
    ${1}     | ${'1: true'}
    ${2}     | ${'2: false'}
    ${5}     | ${'5: false'}
    ${'12'}  | ${'12: false'} 
    ${12}    | ${'12: true'}   
    ${12345678}    | ${'12345678: false'}  
    `('Fibonacci Number test', ({input, result}) => {
        const out = checkFibonacciNumberSquare(input)
        expect(out).toBe(result)
    })
})