const root = document.querySelector('#root')
const textTitle = 'Difficulty'

//TAGGED TEMPLATE STRING
const title = Title`
    color: #82589f;
    font-size: 2.5rem;
    letter-spacing: 1.5px;
    margin-top: 3rem;
    ${textTitle}`





root.insertAdjacentHTML('beforeend', title)
root.insertAdjacentHTML('beforeend', wrapperCharacters)
