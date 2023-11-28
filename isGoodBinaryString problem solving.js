function isGoodBinaryString(binaryString, oneGroup, zeroGroup) {
  let consecutiveOnes = 0
  let consecutiveZeros = 0

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      if (consecutiveZeros > 0 && consecutiveZeros < zeroGroup) {
        return false
      }

      consecutiveOnes++
      consecutiveZeros = 0

      if (consecutiveOnes === oneGroup) {
        consecutiveOnes = 0
      }
    } else if (binaryString[i] === '0') {
      if (consecutiveOnes > 0 && consecutiveOnes < oneGroup) {
        return false
      }

      consecutiveZeros++
      consecutiveOnes = 0

      if (consecutiveZeros === zeroGroup) {
        consecutiveZeros = 0
      }
    } else {
      throw Error('invalid string')
    }
  }

  return true
}

// Example usage:
const binaryString1 = '011110110'
const oneGroup1 = 2
const zeroGroup1 = 1

const binaryString2 = '01101010'
const oneGroup2 = 2
const zeroGroup2 = 1

console.log(isGoodBinaryString(binaryString1, oneGroup1, zeroGroup1)) // Output: true
console.log(isGoodBinaryString(binaryString2, oneGroup2, zeroGroup2)) // Output: false
