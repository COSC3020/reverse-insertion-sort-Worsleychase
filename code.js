function insertionSortReverse(arr) {
    for(var i = arr.length - 2; i >= 0; i--) {
      var val = arr[i];
      var j;
      for(j = i + 1; j < arr.length && arr[j] < val; j++) {
        arr[j - 1] = arr[j];
      }
      arr[j - 1] = val;
    }
    return arr;
}
