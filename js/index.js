const root = document.querySelector('#root')
const textTitle = 'Qual a sua fome?'

//TAGGED TEMPLATE STRING
const title = Title`
    color: #82589f;
    font-size: 6rem;
    margin-top: 1rem;
    ${textTitle}
    `
root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
root.insertAdjacentHTML('beforeend', slide)

