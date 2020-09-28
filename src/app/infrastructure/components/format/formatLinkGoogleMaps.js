export default function (object) {
  let address = `${object.street},${object.number},${object.city},${object.state},${object.zip_code}`
  address = address.split(' ').join('+')
  return `https://www.google.com/maps/place/${address}`
}
