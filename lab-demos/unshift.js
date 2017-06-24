function unshift(array, ...nextItems) {
  return [...array, ...nextItems];
}

unshift([1,2,3],4,5,6);
