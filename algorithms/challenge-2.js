function fizzBuzz(input){
    if (x % 3 == 0 && x % 5 == 0 ) {
        return ('fizzbuzz')
    }else if (input % 5 == 0) {
        return ('buzz')
    }else if (input % 3 == 0) {
        return ('fizz')
    }else {
        return (input)
    }
}


module.exports = fizzBuzz
