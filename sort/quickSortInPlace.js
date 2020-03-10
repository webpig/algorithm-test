function quickSortInPlace(
  originalArr,
  startIndex = 0,
  endIndex = originalArr.length - 1,
  recursiveCall = false
) {
  const arr = recursiveCall ? originalArr : [...originalArr]                                                                                                                                                                                                                                                                                                                                                                                                              
  
  if (startIndex < endIndex) {
    const pivot = partition(arr, startIndex, endIndex)
    const RECURSIVE_CALL = true

    quickSortInPlace(arr, startIndex, pivot - 1, RECURSIVE_CALL)
    quickSortInPlace(arr, pivot + 1, endIndex, RECURSIVE_CALL)
  }

  return arr
}

function partition(arr, startIndex, endIndex) {
  let pivot = arr[endIndex]
  let i = startIndex

  for (let j = startIndex; j < endIndex; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
    }
  }

  [arr[i], arr[endIndex]] = [arr[endIndex], arr[i]]
  
  return i
}

module.exports = quickSortInPlace