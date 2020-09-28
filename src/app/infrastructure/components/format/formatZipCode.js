export default function (zipCode) {
  return zipCode.replace(/(\d{5})(\d{3})/, '$1-$2')
}
