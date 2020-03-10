function insertionSort(originalArr) {
  const arr = [...originalArr]
  const len = arr.length

  if (len <= 1) return arr

  for (let i = 1; i < len; i++) { 
    // for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
    //   [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
    // }
    const value = arr[i]
    let j = i - 1

    for (; j >= 0; j--) {
      if (arr[j] > value) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }

    arr[j + 1] = value
  }

  return arr
}

module.exports = insertionSort