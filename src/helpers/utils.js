export const isDefined = (value) => {
  if(value === 'undefined' || value === null || value === undefined) {
    return false
  }
  return true
}
