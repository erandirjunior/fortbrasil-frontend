export default function (number) {
  if (number.length === 8) {
    return number.replace(/(\d{4})(\d{4})/, '$1-$2')
  }
  return number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}
