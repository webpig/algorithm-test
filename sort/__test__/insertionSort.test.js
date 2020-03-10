const insertionSort = require('../insertionSort')
const testSort = require('../testSort')

// describe('InsertionSort', () => {
//   it('should sort array', () => {
//     testSort(insertionSort)
//   })
// })
test('InsertionSort', () => {
  testSort(insertionSort)
})
