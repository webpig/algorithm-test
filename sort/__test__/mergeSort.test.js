const mergeSort = require('../mergeSort')
const testSort = require('../testSort')

// describe('MergeSort', () => {
//   it('should sort array', () => {
//     testSort(mergeSort)
//   })
// })
test('MergeSort', () => {
  testSort(mergeSort)
})