const button = document.querySelector('button')
const input = document.querySelector('input')
const notice = document.querySelector('.notice p')
button.addEventListener('click', clipboard)

function clipboard() {
    input.select()
    input.setSelectionRange(0, 99999)

    document.execCommand("copy")
    
    notice.innerHTML = "Copied public wallet address!"
    setTimeout(() => {
        notice.innerHTML = ""
    }, 3500)
}

const qrcode = new QRCode({
  content: input.value,
  container: "svg-viewbox",
  join: true
})
document.getElementById("qr-code").innerHTML = qrcode.svg()