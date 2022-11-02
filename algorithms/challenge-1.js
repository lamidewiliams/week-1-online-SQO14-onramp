function countTruthy(arr) {
    truthyvalue = 0
        for ( const element of arr) {
            if (element) {
                truthyvalue++
            }
        }
        return truthyvalue
    }


 module.exports = countTruthy