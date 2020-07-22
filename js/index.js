const root = document.querySelector("#root")

const textTitle = "ale"
const textSmall = 'texto pequeno'
const otherText = 'outro texto'
//TAGGED TEMPLATE STRING
const title = Title`
    color: red;
    ${textTitle}
    font-size: 50px;
    ${textSmall}
    ${otherText}
`
root.insertAdjacentHTML('beforeend', title)