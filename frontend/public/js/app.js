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