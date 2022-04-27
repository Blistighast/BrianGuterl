const arrChunker = (arr, size) => {
  let chunkedArr = []
  let i = 0

  while (i < arr.length) {
    let subArr = arr.slice(i, i + size)
    chunkedArr.push(subArr)
    i += size
  }

  return chunkedArr
}

export default arrChunker