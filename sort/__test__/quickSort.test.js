const quickSort = require('../quickSort')
const testSort = require('../testSort')

// describe('QuickSort', () => {
//   it('should sort array', () => {
//     testSort(quickSort)
//   })
// })
test('QuickSort', () => {
  testSort(quickSort)
})
