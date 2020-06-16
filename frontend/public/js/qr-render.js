const input = document.querySelector('input')
const qrcode = new QRCode({
  content: input.dataset.hash,
  container: "svg-viewbox",
  join: true
})
document.getElementById("qr-code").innerHTML = qrcode.svg()