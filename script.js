
const userInput = document.getElementById("userInput").addEventListener('focus',()=>{
    righteye.className = 'righteyeafter'
    lefteye.className = 'lefteyeafter'
})
const type = document.getElementById("userInput").addEventListener('keypress',()=>{
    righteye.style.left = '171px'
    lefteye.style.left = '111px'
})
const passInput = document.getElementById("passInput").addEventListener('focus',()=>{
    righteye.className = 'righteyeup'
    lefteye.className = 'lefteyeup'
})

