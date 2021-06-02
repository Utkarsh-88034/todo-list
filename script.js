function forminput(){
    let form = document.getElementById("new_todo")
    let list = document.querySelector("ul")
    let todoli = document.createElement("li")
    let newtodo = document.createElement("input")
    let label = document.createElement("label")

    newtodo.setAttribute("type", "checkbox")
    newtodo.setAttribute("class", "check")

    if(form.value != ""){
        label.textContent = String(form.value)
        todoli.appendChild(newtodo)
        todoli.appendChild(label)
        list.appendChild(todoli)
        form.value = ""
    }
}
let submit = document.getElementById("add-todo")
submit.addEventListener("click", forminput)

let remove = document.getElementById("remove")

function removeelement(){
    let mainlist = document.querySelectorAll("li")
    mainlist.forEach(i =>{
        let temp = i.firstChild
        if(temp.checked){
            i.remove()
        }
    })

}

remove.addEventListener("click", removeelement)
let formin = document.getElementById("new_todo")
formin.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        forminput()
    }
})