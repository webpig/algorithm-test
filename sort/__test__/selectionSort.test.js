const selectionSort = require('../selectionSort')
const testSort = require('../testSort')

// describe('SelectionSort', () => {
//   it('should sort array', () => {
//     testSort(selectionSort)
//   })
// })
test('SelectionSort', () => {
  testSort(selectionSort)
})