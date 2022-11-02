function sumMix(arr) {
    total = 0
    for (let i = 0; i < arr.length;i++) {

        // convert each string in the array  to number using the parseint method
        intvalue = parseInt(arr[i])

        // add converted intergers
        total += intvalue; 
    }
    return total
}
module.exports = sumMix
  