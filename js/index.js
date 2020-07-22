const root = document.querySelector("#root")

function newElement(tag, content){
const title = `<${tag}>${content}</${tag}>`

root.insertAdjacentHTML("beforeend", title)

}



newElement("h4", "hmm")
newElement("h1", "ava")
