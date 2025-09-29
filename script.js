const addItembtn = document.querySelector("button")
const itemList = document.getElementById("item-list")
const remove = document.getElementById('text-danger')
console.log(remove);

addItembtn.addEventListener("click", 
    function addItem(){
        const itemInput = document.getElementById("item-input").value
        localStorage.setItem('name' , itemInput)
        console.log(itemInput);
        event.preventDefault()

        const item = localStorage.getItem('name')
        itemList.innerHTML += ` 
            <li class="list-item">
              ${item}
              <i class="bi bi-x fs-5 text-danger" id="remove"></i>
            </li>`
})

// remove.addEventListener('click', function remove(){
//     localStorage.removeItem('name')
// })
