const pathCoxinha = `images/coxinha.png`

const coxinha = Character`
width: 20%;
margin-top: 3re m;
margin-left: 1rem;
margin-right: 1rem;
${pathCoxinha}
`
const WrapperCharacters = (css, children) => (`
    <div style="${css}"> ${children}
    </div>
    `)

const wrapperCharacters = WrapperCharacters `
    display: flex;
    justify-content: space-evenly;
    ${coxinha + coxinha + coxinha}
`
