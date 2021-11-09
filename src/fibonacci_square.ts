export  const checkFibonacciNumberSquare = (n: any) => {
    let result = false
    if (isValidInteger(n) && isFibonacciNumber(n)) {
        result = true
    }

    return `${n}: ${result}`
}

const isFibonacciNumber = (n: number): boolean => {
    if (isSquare(5 * Math.pow(n,4) + 4) || isSquare(5 * Math.pow(n,4) + 4)) {
        return true
    }

    return false;
} 

const isValidInteger = (n: any): boolean => {
    if(typeof n == 'number' && !isNaN(n)) {
        return Number.isInteger(n) && n > 0
    }
}

const isSquare = (n: number): boolean => Number.isInteger(Math.sqrt(n))