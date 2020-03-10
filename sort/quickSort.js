function quickSort(originalArr) {
  const arr = [...originalArr]
  const len = arr.length

  if (len <= 1) return arr

  const mid = arr.pop()
  const lowArr = []
  const highArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= mid) {
      lowArr.push(arr[i])
    } else {
      highArr.push(arr[i])
    }
  }

  return quickSort(lowArr).concat(mid, quickSort(highArr))
}

module.exports = quickSort