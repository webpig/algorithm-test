function mergeSort(arr) {
  const len = arr.length

  if (len <= 1) return arr
  
  const midIndex = Math.floor(len / 2)
  const leftArr = arr.slice(0, midIndex)
  const rightArr = arr.slice(midIndex, len)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  let sortedArr = []

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
      sortedArr.push(rightArr.shift())
    }
  }

  if (leftArr.length) {
    sortedArr = sortedArr.concat(leftArr)
  }
  
  if (rightArr.length) { 
    sortedArr = sortedArr.concat(rightArr)
  }

  return sortedArr
}

module.exports = mergeSort