function bubbleSort(originalArr) {
  const arr = [...originalArr]
  const len = arr.length

  if (len <= 1) return arr

  for (let i = 0; i < len; i++) {
    let swapped = false

    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swap(arr, j, j + 1)
        swapped = true
      }
    }

    if (!swapped) break
  }

  return arr
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

module.exports = bubbleSort