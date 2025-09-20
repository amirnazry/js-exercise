
// const userInput = document.getElementById("userInput").addEventListener('focusin',()=>{
//     righteye.className = 'righteyeafter'
//     lefteye.className = 'lefteyeafter'
// })
// const userout = document.getElementById("userInput").addEventListener('focusout',()=>{
//     righteye.className = 'righteye'
//     lefteye.className = 'lefteye'
// })
// const type = document.getElementById("userInput").addEventListener('input',()=>{
//     righteye.style.left = '+1px'
//     lefteye.style.left = '111px'
// })
// const passInput = document.getElementById("passInput").addEventListener('focus',()=>{
//     righteye.className = 'righteyeup'
//     lefteye.className = 'lefteyeup'
// })

const userInput = document.getElementById('userInput')
const passInput = document.getElementById('passInput')

userInput.addEventListener('focus',() => {
    righteye.className = 'righteyeafter'
    lefteye.className = 'lefteyeafter'
})
userInput.addEventListener('blur',() => {
    righteye.className = 'righteye'
    lefteye.className = 'lefteye'
})


passInput.addEventListener('focus', ()=>{
    righteye.className = 'righteyeup'
    lefteye.className = 'lefteyeup'
})
passInput.addEventListener('blur',() => {
    righteye.className = 'righteye'
    lefteye.className = 'lefteye'
})


// userInput.addEventListener('keydown', ()=>{
//     var righteyenum = 75
//     // var righteyenum =+ righteyenum+  1
//     righteye.style.top = `${righteyenum}px`
//     // console.log(righteyenum);
//     righteyenum++
// })
