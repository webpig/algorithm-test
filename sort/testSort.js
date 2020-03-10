const sortedArr = [1, 2, 3, 4, 5, 6, 7]
const reverseArr = [7, 6, 5, 4, 3, 2, 1]
const notSortedArr = [4, 3, 1, 7, 6, 2, 5]
const equalArr = [1, 1, 1, 1, 1, 1, 1]
const negativeArr = [-3, -7, -6, -4, -5, -2, -1]
const sortedNegativeArr = [-7, -6, -5, -4, -3, -2, -1]
const mixedArr = [1, -3, 0, -2, 2, -1, 3]
const sortedMixedArr = [-3, -2, -1, 0, 1, 2, 3]

function testSort(sort) {
  expect(sort([])).toEqual([])
  expect(sort([1])).toEqual([1])
  expect(sort([1, 2])).toEqual([1, 2])
  expect(sort([2, 1])).toEqual([1, 2])
  expect(sort(sortedArr)).toEqual(sortedArr)
  expect(sort(reverseArr)).toEqual(sortedArr)
  expect(sort(notSortedArr)).toEqual(sortedArr)
  expect(sort(equalArr)).toEqual(equalArr)
  expect(sort(negativeArr)).toEqual(sortedNegativeArr)
  expect(sort(sortedNegativeArr)).toEqual(sortedNegativeArr)
  expect(sort(mixedArr)).toEqual(sortedMixedArr)
  expect(sort(sortedMixedArr)).toEqual(sortedMixedArr)
}

module.exports = testSort