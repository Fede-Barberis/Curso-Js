function factorial(a) {
    factorial = 1

    for(let i= a; i > 0; i--) {
        factorial *= i
    }
    return factorial
}

console.log(factorial(8))