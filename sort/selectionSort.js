function selectionSort(arr) {
  const len = arr.length

  if (len <= 1) return arr

  for (let i = 0; i < len; i++) {
    let minIndex = i

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    if (minIndex > 0) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr
}

module.exports = selectionSort