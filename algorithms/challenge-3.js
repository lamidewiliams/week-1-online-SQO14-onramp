function sumMix(arr) {
    for (let i = 0; i < arr.length;i++) {
        // convert each string in the array  to number using the parseint method
        intvalue = parseInt(arr[i])

        // add converted intergers
        theSum += intvalue; 
    }
    return(theSum)
}

  module.exports = sumMix